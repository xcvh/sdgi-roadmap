import React from "react";
import { Link, useLocation } from "react-router";

const navigation = [
    { name: "Home", href: "/" },
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
        <nav className="bg-green-800 mb-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="shrink-0">
                            <img
                                alt="Your Company"
                                src="/SDG-Logo.png"
                                className="size-14"
                            />
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        to={item.href}
                                        className={classNames(
                                            location.pathname === item.href
                                                ? "bg-neutral-900 text-white"
                                                : "text-neutral-300 hover:bg-neutral-700 hover:text-white",
                                            "rounded-md px-3 py-2 text-sm font-medium"
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