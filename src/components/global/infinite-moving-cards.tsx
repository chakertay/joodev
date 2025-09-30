'use client'

import { cn } from '@/lib/utils'
import Image from 'next/image'
import React, { useEffect, useState, useCallback } from 'react'

export const InfiniteMovingCards = ({
    items,
    direction = 'left',
    speed = 'fast',
    pauseOnHover = true,
    className,
}: {
    items: {
        href: string
    }[]
    direction?: 'left' | 'right'
    speed?: 'fast' | 'normal' | 'slow'
    pauseOnHover?: boolean
    className?: string
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const scrollerRef = React.useRef<HTMLUListElement>(null)

    const [start, setStart] = useState(false)
    const addAnimation = useCallback(() => {
        if (!containerRef.current || !scrollerRef.current) return

        const scrollerContent = Array.from(scrollerRef.current.children)

        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true)
            if (scrollerRef.current) {
                scrollerRef.current.appendChild(duplicatedItem)
            }
        })

        if (containerRef.current) {
            const animationDirection = direction === 'left' ? 'forwards' : 'reverse'
            containerRef.current.style.setProperty('--animation-direction', animationDirection)

            const duration = speed === 'fast' ? '20s' : speed === 'normal' ? '40s' : '80s'
            containerRef.current.style.setProperty('--animation-duration', duration)
        }

        setStart(true)
    }, [direction, speed])

    useEffect(() => {
        addAnimation()
    }, [addAnimation])
    console.log(items)
    return (
        <div
            ref={containerRef}
            className={cn(
                'scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    ' flex min-w-full shrink-0 gap-10 py-4 w-max flex-nowrap',
                    start && 'animate-scroll ',
                    pauseOnHover && 'hover:[animation-play-state:paused]'
                )}
            >
                {items.map((item, idx) => (
                    <Image
                        width={170}
                        height={1}
                        src={item.href}
                        alt={item.href}
                        className=" relative rounded-2xl  object-contain opacity-50"
                        key={item.href}
                    />
                ))}
            </ul>
        </div>
    )
}