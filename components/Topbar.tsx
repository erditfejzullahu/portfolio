"use client"
import Hamburger from "hamburger-react"
import { useEffect, useRef, useState, useCallback } from "react"
import FullscreenMenu from "./FullscreenMenu"
import gsap from "gsap"
import { RootState, useAppDispatch } from "@/store"
import { setTopbarVisible } from "@/store/topbarSlice"
import { setOverflowHidden } from "@/store/overflowSlice"
import { useSelector } from "react-redux"

const Topbar = () => {
    const dispatch = useAppDispatch();
    const [isOpened, setIsOpened] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isTopbarVisible, setIsTopbarVisible] = useState(true);
    const hasOpenDialog = useSelector((state: RootState) => state.topbar.activeDialogs.length > 0);

    const topbarContainerRef = useRef<HTMLDivElement>(null);
    const navBar = useRef<HTMLDivElement>(null);
    const lastScrollY = useRef(0);
    const menuCloseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const closeMenu = useCallback(() => {
        setIsOpened(false);
        if (menuCloseTimeout.current) {
            clearTimeout(menuCloseTimeout.current);
        }
        menuCloseTimeout.current = setTimeout(() => {
            setIsMenuVisible(false);
            menuCloseTimeout.current = null;
        }, 1000);
    }, []);

    const toggleMenu = useCallback(() => {
        if (menuCloseTimeout.current) {
            clearTimeout(menuCloseTimeout.current);
            menuCloseTimeout.current = null;
        }
        setIsMenuVisible(true);
        setIsOpened(true);
    }, []);

    useEffect(() => {
        dispatch(setOverflowHidden(isOpened));
    }, [isOpened, dispatch]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY === 0) {
                setIsTopbarVisible(true);
                topbarContainerRef.current?.classList.remove("fixed", "floating-nav");
                navBar.current?.classList.remove("floating-neccessary");
            } else if (currentScrollY > lastScrollY.current) {
                setIsTopbarVisible(false);
                topbarContainerRef.current?.classList.add("fixed", "floating-nav");
                navBar.current?.classList.remove("floating-neccessary");
            } else if (currentScrollY < lastScrollY.current) {
                setIsTopbarVisible(true);
                topbarContainerRef.current?.classList.add("fixed", "floating-nav");
                navBar.current?.classList.remove("floating-neccessary");
            }
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => () => {
        if (menuCloseTimeout.current) {
            clearTimeout(menuCloseTimeout.current);
        }
    }, []);

    // GSAP animation for topbar visibility
    useEffect(() => {
        gsap.to(topbarContainerRef.current, {
            y: isTopbarVisible && !hasOpenDialog ? 0 : -100,
            opacity: isTopbarVisible && !hasOpenDialog ? 1 : 0,
            duration: 0.2
        });
        dispatch(setTopbarVisible(isTopbarVisible));
    }, [isTopbarVisible, hasOpenDialog, dispatch]);

    return (
        <>
            <header ref={topbarContainerRef} className="shadow-lg fixed h-20 top-0 w-full z-[100]">
                <nav ref={navBar} className="topbar-bg before:shadow-xl before:shadow-black h-20 relative overflow-hidden">
                    <div className="mx-auto h-full px-6 max-md:px-4">
                        <ul className="flex flex-row items-center justify-between relative z-20 h-full">
                            <li>
                                <h2 className="text-2xl font-medium uppercase pointer-events-none cursor-none max-[370px]:text-xl max-[303px]:text-lg max-[283px]:text-base">
                                    Erdit Fejzullahu
                                </h2>
                            </li>
                            <li className="cursor-pointer">
                                {!isOpened && (
                                    <Hamburger 
                                      label="Hamburger Menu"
                                        toggled={false}
                                        toggle={toggleMenu}
                                        size={20}
                                    />
                                )}
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            {isMenuVisible && <FullscreenMenu isOpened={isOpened} onClose={closeMenu} />}
        </>
    );
};

export default Topbar;