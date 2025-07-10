"use client"
import Hamburger from "hamburger-react"
import { useEffect, useRef, useState, useCallback } from "react"
import FullscreenMenu from "./FullscreenMenu"
import { useWindowScroll } from "react-use"
import gsap from "gsap"
import { useAppDispatch } from "@/store"
import { setTopbarVisible } from "@/store/topbarSlice"
import { setOverflowHidden } from "@/store/overflowSlice"

const Topbar = () => {
    const dispatch = useAppDispatch();
    const [isOpened, setIsOpened] = useState(false);
    const [hamburgerVisibility, setHamburgerVisibility] = useState(true);
    const [isTopbarVisible, setIsTopbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const topbarContainerRef = useRef<HTMLDivElement>(null);
    const navBar = useRef<HTMLDivElement>(null);
    const { y: currentScrollY } = useWindowScroll();

    // Memoized toggle function for Hamburger
    const toggleMenu = useCallback(() => {
        setIsOpened(prev => !prev);
    }, []);

    // Handle menu open/close effects
    useEffect(() => {
        dispatch(setOverflowHidden(isOpened));
        setHamburgerVisibility(!isOpened);
    }, [isOpened, dispatch]);

    // Handle scroll behavior
    useEffect(() => {
        if (currentScrollY === 0) {
            setIsTopbarVisible(true);
            topbarContainerRef.current?.classList.remove('fixed', 'floating-nav');
            navBar.current?.classList.remove("floating-neccessary");
        } else if (currentScrollY > lastScrollY) {
            setIsTopbarVisible(false);
            topbarContainerRef.current?.classList.add('fixed', 'floating-nav');
            navBar.current?.classList.remove("floating-neccessary");
        } else if (currentScrollY < lastScrollY) {
            setIsTopbarVisible(true);
            topbarContainerRef.current?.classList.add('fixed', 'floating-nav');
            navBar.current?.classList.remove("floating-neccessary");
        }
        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);

    // GSAP animation for topbar visibility
    useEffect(() => {
        gsap.to(topbarContainerRef.current, {
            y: isTopbarVisible ? 0 : -100,
            opacity: isTopbarVisible ? 1 : 0,
            duration: 0.2
        });
        dispatch(setTopbarVisible(isTopbarVisible));
    }, [isTopbarVisible, dispatch]);

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
                                {hamburgerVisibility && (
                                    <Hamburger 
                                      label="Hamburger Menu"
                                        toggled={isOpened} 
                                        toggle={toggleMenu} 
                                        size={20}
                                    />
                                )}
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            <FullscreenMenu isOpened={isOpened} sendAction={setIsOpened} />
        </>
    );
};

export default Topbar;