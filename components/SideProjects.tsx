"use client"
import React, { MouseEvent, useEffect, useRef, useState, useCallback, useMemo } from 'react'
import { PersonalPortfolioSlider, PortfolioSliderInterface } from '@/data/navigations'
import Image from 'next/image'
import { CgClose } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { MdOpenInFull } from 'react-icons/md'
import { setTriggerData } from '@/store/triggerModalSlice'
import ImageFullscreen from './ImageFullscreen'
import { GoMoveToTop } from 'react-icons/go'
import { ArrowDownRight } from 'lucide-react'

const SideProjects = React.memo(() => {
  const dispatch = useDispatch();
  const isTopbarVisible = useSelector((state: RootState) => state.topbar.isTopbarVisible);
  
  const [hoverProjects, setHoverProjects] = useState<string | null>(null);
  const [unHovered, setUnHovered] = useState(false);
  const [addCloser, setAddCloser] = useState(false);
  const [removeProjects, setRemoveProjects] = useState(false);
  const [projectsCloser, setProjectsCloser] = useState(false);
  const [transformStyle, setTransformStyle] = useState("");
  const [windowInnerWidth, setWindowInnerWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1821
  );

  const top = useRef<HTMLDivElement>(null);
  const bottom = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  // Memoize the hovered project
  const hoveredProject = useMemo(() => 
    hoverProjects ? PersonalPortfolioSlider.find((item) => item.title === hoverProjects) : null,
    [hoverProjects]
  );

  // Memoize device checks
  const isMobile = useMemo(() => windowInnerWidth < 640, [windowInnerWidth]);
  const isDesktop = useMemo(() => windowInnerWidth > 1024, [windowInnerWidth]);
  const isLargeDesktop = useMemo(() => windowInnerWidth > 1820, [windowInnerWidth]);

  // Memoized event handlers
  const handleMouseMove = useCallback((e: MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current || !isDesktop) return;

    const { left, top, width, height } = itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * 5;

    setTransformStyle(
      `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`
    );
  }, [isDesktop]);

  const handleOpenModal = useCallback((object: PortfolioSliderInterface) => {
    dispatch(setTriggerData(object));
  }, [dispatch]);

  const handleCloser = useCallback(() => {
    setAddCloser(true);
    setTimeout(() => {
      setHoverProjects(null);
      setAddCloser(false);
    }, 300);
  }, []);

  const mouseEnter = useCallback((item: PortfolioSliderInterface) => {
    setHoverProjects(item.title);
    setUnHovered(true);
    setAddCloser(true);
    setTimeout(() => {
      setUnHovered(false);
      setAddCloser(false);
    }, 100);
  }, []);

  // Resize handler
  useEffect(() => {
    const handleResize = () => setWindowInnerWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle projects visibility based on window size
  useEffect(() => {
    if (!itemRef.current) return;

    if (removeProjects && !isLargeDesktop) {
      itemRef.current.classList.add("max-[1820px]:animate-fadeOutLeft");
      const timer = setTimeout(() => {
        itemRef.current?.classList.add("hidden!");
        setProjectsCloser(true);
      }, 500);
      return () => clearTimeout(timer);
    } else if (!removeProjects && !isLargeDesktop) {
      itemRef.current.classList.remove("max-[1820px]:animate-fadeOutLeft", "hidden!");
      setProjectsCloser(false);
    } else if (isLargeDesktop) {
      setRemoveProjects(false);
      setProjectsCloser(false);
      itemRef.current.classList.remove("max-[1820px]:animate-fadeOutLeft", "hidden!");
    }
  }, [removeProjects, isLargeDesktop]);

  // Click outside handler
  const handleClickOutside = useCallback((event: globalThis.MouseEvent) => {
    if (itemRef.current && !itemRef.current.contains(event.target as Node) && 
        bottom.current && !bottom.current.contains(event.target as Node)) {
      handleCloser();
    }
  }, [handleCloser]);
  
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleClickOutside]);

  // Early return for mobile
  if (isMobile) return null;

  // Memoize project items
  const projectItems = useMemo(() => 
    PersonalPortfolioSlider.map((item) => (
      <div 
        key={`side-${item.title}`}
        onMouseEnter={() => mouseEnter(item)}
        onMouseLeave={() => { setUnHovered(true); setTransformStyle("") }}
        className={`cursor-pointer interactive relative flex items-center justify-center size-full rounded-lg hover:w-24 transition-all ease-linear shadow-[0_0_30px_rgba(0,0,0,0.2)]`}
      >
        <Image 
          src={item.image} 
          alt={item.title}
          // width={96}
          // height={96}
          className={`object-cover rounded-lg shadow-xl shadow-gray-500 size-24 border transition-all max-[1820px]:min-w-[80px] max-[1820px]:max-h-[80px]`} 
        />
      </div>
    )),
    [mouseEnter]
  );

  return (
    <>
      {removeProjects && (
        <div 
          className={`fixed min-[1820px]:hidden bg-gray-100 shadow-lg shadow-gray-500 z-[9999] left-4 cursor-pointer animate-pulse ${
            isTopbarVisible ? "top-[100px]" : "top-[20px]"
          } transition-all ease-in-out rounded-lg p-2`} 
          onClick={() => { setProjectsCloser(false); setRemoveProjects(false); }}
        >
          <ArrowDownRight />
        </div>
      )}
      
      {!projectsCloser && (
        <div 
          style={{ transform: isDesktop ? transformStyle : "" }}
          onMouseMove={handleMouseMove}
          ref={itemRef}
          className={`max-sm:hidden! will-change-transform fixed z-[90] left-4 top-0 bottom-0 max-h-[40%] overflow-y-auto my-auto rounded-xl shadow-lg shadow-gray-500 p-3 bg-white flex flex-col gap-4 items-center max-[1820px]:bottom-auto ${
            isTopbarVisible ? "max-[1820]:top-[100px]" : "max-[1820px]:top-[20px]"
          } transition-all ease-out duration-500 max-[1820]:left-0 max-[1820]:right-0 max-[1820]:flex-row max-[1820px]:max-w-[600px] max-[1820px]:mx-auto max-[1820px]:overflow-x-auto`}
        >
          {projectItems}
          {!removeProjects && (
            <div 
              className="absolute min-[1820px]:hidden top-0 rounded-lg p-2 right-0 mx-auto w-fit bg-gray-100 animate-pulse z-10 cursor-pointer shadow-lg shadow-gray-500"
              onClick={() => setRemoveProjects(true)}
            >
              <GoMoveToTop />
            </div>
          )}
        </div>
      )}
      
      {(hoveredProject && !removeProjects) && (
        <div 
          onMouseMove={handleMouseMove}
          onMouseLeave={() => { setTransformStyle("") }}
          style={{ transform: isDesktop ? transformStyle : "none" }}
          ref={bottom}
          className={`flex will-change-transform flex-col transition-all justify-between fixed bottom-0 my-auto top-0 ${
            unHovered ? "left-[120px]" : "left-[160px]"
          } max-[1820px]:left-0 max-[1820px]:right-0 max-[1820px]:mx-auto max-[1820px]:max-w-[600px] max-[1820px]:bottom-auto ${
            isTopbarVisible ? "max-[1820]:top-[220px]" : "max-[1820px]:top-[140px]"
          } transition-all ease-in max-w-[300px] rounded-xl p-4 max-h-[32%] h-full bg-white shadow-lg shadow-gray-500 animate-fadeIn ${
            addCloser ? "animate-fadeOutLeft" : "animate-fadeInRight"
          } z-[90] overflow-y-auto overflow-x-hidden!`}
        >
          <div className="absolute right-0 z-20 top-0 bg-white rounded-bl-md cursor-pointer hover:bg-gray-200 transition-all" onClick={handleCloser}>
            <div className="sticky h-fit w-fit mx-auto shadow-lg shadow-gray-500 rounded-bl-md p-2">
              <CgClose size={25}/>
            </div>
          </div>
          <div>
            <div className="relative z-0 transition-all group">
              <ImageFullscreen images={[hoveredProject.image]} additionalStyles='rounded-lg'/>
              <Image 
                src={hoveredProject.image} 
                alt={hoveredProject.title}
                width={300}
                height={144}
                className="w-full h-36 rounded-lg shadow-lg shadow-gray-500 max-[1820px]:object-cover" 
              />
            </div>
            <div className="mt-2">
              <h2 className="text-lg font-semibold line-clamp-1">{hoveredProject.title}</h2>
              <p className="font-light text-sm line-clamp-4">{hoveredProject.description}</p>
            </div>
          </div>
          <div className="link-element">
            <button 
              onClick={() => handleOpenModal(hoveredProject)} 
              className="mr-auto mt-2 hover:bg-gray-300 flex flex-row items-center gap-2 bg-white shadow-xl rounded-bl-md shadow-gray-400 px-3 py-1.5 border-gray-200 link-element cursor-pointer"
            >
              See Details
              <MdOpenInFull size={22} className="shadow-lg shadow-gray-300"/>
            </button>
          </div>
        </div>
      )}
    </>
  );
});

export default SideProjects;