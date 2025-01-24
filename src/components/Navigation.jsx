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
        <nav className="sticky top-0 z-50 bg-green-900 mb-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <div className="shrink-0">
                            <img
                                alt="SDG iLevel"
                                src="./SDG-Logo.png"
                                className="size-14 rounded-md bg-green-100 p-1"
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
                                                ? "bg-green-100 text-green-900"
                                                : "text-green-100 hover:bg-green-100 hover:text-green-900",
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