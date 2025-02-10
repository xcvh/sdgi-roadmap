import React from "react";
import { Link, useLocation } from "react-router-dom";
import sdgLogo from "/SDG-Logo.png";

const navigation = [
    { name: "SDG-iLevel Project", href: "https://www.sdg-ilevel.eu/" },
    { name: "Introduction", href: "/" },
    { name: "Croatia", href: "/croatia" },
    { name: "Lithuania", href: "/lithuania" },
    { name: "Spain", href: "/spain" },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Navigation = () => {
    const location = useLocation();

    return (
        <nav className="sticky top-0 z-50 bg-sky-100 mb-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="shrink-0">
                            <a href='https://www.sdg-ilevel.eu/' target='_blank'>
                                <img
                                    alt="SDG iLevel"
                                    src={sdgLogo}
                                    className="size-14 rounded-md bg-sky-100 p-1"
                                />
                            </a>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={classNames(
                                            location.pathname === item.href
                                                ? "bg-sky-100 text-sky-900 border-b-2 border-sky-900"
                                                : "text-sky-900 hover:border-b-2 hover:border-sky-900 hover:text-sky-900",
                                            "border-b-2 border-transparent px-3 py-2 text-sm font-medium"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation; 
