"use client"

import React, { useEffect, useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Globe2, Layers3, Smartphone } from "lucide-react"
import { PersonalPortfolioSlider, PortfolioSliderInterface } from "@/data/navigations"
import { useAppDispatch } from "@/store"
import { setDialogOpen } from "@/store/topbarSlice"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

interface AllPortfoliosModalProps {
    opened: boolean;
    close: () => void;
    openSpecificProject: (item: PortfolioSliderInterface) => void;
}

type ProjectType = "All" | "Web" | "Mobile"

const filters: { label: ProjectType; icon: typeof Layers3 }[] = [
    { label: "All", icon: Layers3 },
    { label: "Web", icon: Globe2 },
    { label: "Mobile", icon: Smartphone },
]

const AllPortfoliosModal = ({ opened, close, openSpecificProject }: AllPortfoliosModalProps) => {
    const dispatch = useAppDispatch()
    const [typeSelected, setTypeSelected] = useState<ProjectType>("All")
    const visibleProjects = typeSelected === "All"
        ? PersonalPortfolioSlider
        : PersonalPortfolioSlider.filter((item) => item.type === typeSelected)

    useEffect(() => {
        dispatch(setDialogOpen({ id: "all-portfolios", isOpen: opened }))
        return () => {
            dispatch(setDialogOpen({ id: "all-portfolios", isOpen: false }))
        }
    }, [dispatch, opened])

    return (
        <Dialog open={opened} onOpenChange={(isOpen) => !isOpen && close()}>
            <DialogContent className="flex h-[min(88vh,900px)] w-[calc(100%-1.5rem)] max-w-6xl flex-col gap-0 overflow-hidden rounded-3xl border-0 bg-[#faf9f7] p-0 shadow-[0_24px_100px_rgba(0,0,0,0.28)] sm:max-w-6xl">
                <DialogHeader className="shrink-0 border-b border-black/[0.07] px-6 pb-5 pt-7 text-left sm:px-9 sm:pb-6 sm:pt-8">
                    <div className="flex flex-col gap-5 pr-8 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
                        <div>
                            <p className="mb-2 text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-[#850e35]">
                                Selected projects
                            </p>
                            <DialogTitle className="text-3xl font-semibold tracking-[-0.045em] text-[#171717] sm:text-4xl">
                                Client Work
                            </DialogTitle>
                            <DialogDescription className="mt-2 max-w-lg text-sm leading-6 text-neutral-500">
                                A selection of digital products built for real people and ambitious teams.
                            </DialogDescription>
                        </div>

                        <div role="group" aria-label="Filter projects" className="flex w-fit items-center gap-1 rounded-full border border-black/[0.07] bg-white p-1 shadow-sm">
                            {filters.map(({ label, icon: Icon }) => {
                                const isSelected = typeSelected === label

                                return (
                                    <button
                                        key={label}
                                        type="button"
                                        aria-pressed={isSelected}
                                        onClick={() => setTypeSelected(label)}
                                        className={`inline-flex min-h-10 items-center gap-2 rounded-full px-3.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#850e35] focus-visible:ring-offset-2 ${
                                            isSelected
                                                ? "bg-[#171717] text-white"
                                                : "text-neutral-500 hover:bg-neutral-100 hover:text-neutral-900"
                                        }`}
                                    >
                                        <Icon aria-hidden="true" size={15} strokeWidth={1.8} />
                                        {label}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                    <p className="mt-5 text-xs font-medium text-neutral-400" aria-live="polite">
                        {visibleProjects.length} {visibleProjects.length === 1 ? "project" : "projects"}
                    </p>
                </DialogHeader>

                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-6 sm:px-9 sm:py-8">
                    <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-3">
                        {visibleProjects.map((item) => {
                            const TypeIcon = item.type === "Web" ? Globe2 : Smartphone

                            return (
                                <button
                                    key={item.title}
                                    type="button"
                                    onClick={() => openSpecificProject(item)}
                                    aria-label={`View ${item.title} project details`}
                                    className="group min-w-0 rounded-2xl text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#850e35] focus-visible:ring-offset-4"
                                >
                                    <span className="relative block aspect-[1.55] overflow-hidden rounded-2xl bg-neutral-200">
                                        <Image
                                            src={item.image}
                                            alt=""
                                            fill
                                            sizes="(max-width: 639px) 90vw, (max-width: 1023px) 44vw, 29vw"
                                            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04] group-focus-visible:scale-[1.04]"
                                        />
                                        <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/5 opacity-70 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100" />
                                        <span className="absolute left-3.5 top-3.5 inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-black/35 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                                            <TypeIcon aria-hidden="true" size={13} strokeWidth={1.8} />
                                            {item.type}
                                        </span>
                                        <span className="absolute bottom-3.5 right-3.5 flex size-10 translate-y-1 items-center justify-center rounded-full bg-white text-neutral-900 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                                            <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
                                        </span>
                                    </span>
                                    <span className="mt-3.5 flex items-start justify-between gap-3">
                                        <span className="line-clamp-2 text-[0.98rem] font-semibold leading-6 tracking-[-0.02em] text-neutral-900 transition-colors group-hover:text-[#850e35]">
                                            {item.title}
                                        </span>
                                        <ArrowUpRight
                                            aria-hidden="true"
                                            size={17}
                                            className="mt-1 shrink-0 text-neutral-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#850e35]"
                                        />
                                    </span>
                                </button>
                            )
                        })}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default AllPortfoliosModal
