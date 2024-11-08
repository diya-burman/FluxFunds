"use client"
import { sidebarLinks } from '@/constants';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Sidebar = ({user}: SiderbarProps) => {
    const pathname = usePathname();
    return (
        <section className="sidebar">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
                <img
                  src="/icons/logo.svg"
                  width={34}
                  height={34}
                  alt="FluxFunds logo"
                  className="size=[24px] max-xl:size-14"
                />
                <h1 className="sidebar-logo">FluxFunds</h1>
              </Link>

              {sidebarLinks.map((item) => {
                const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)
                return (
                    <Link href={item.route} key={item.label} className={cn('sidebar-link', {'bd-bank-gradient': isActive })}>
                      <div className="relative size-6">
                        <img 
                          src={item.imgURL}
                          alt={item.label}
                          className={cn({'brightness-[3] invert-0':isActive})}
                        />
                      </div>
                      <p className={cn("sidebar-label",{"!text-white": isActive})}>
                        {item.label}
                      </p>
                    </Link>
                )
              })}
            </nav>
        </section>
    )
}

export default Sidebar