"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { breadcrumbVariants } from "@/lib/animations";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbItem } from "@/lib/types";

interface BreadcrumbNavProps {
  items: BreadcrumbItem[];
  onNavigate: (path: string) => void;
}

const Breadcrumbs: React.FC<BreadcrumbNavProps> = ({ onNavigate }) => {
  const pathname = usePathname(); // Using usePathname hook
  const [isMounted, setIsMounted] = useState(false);
  // Ensure the component is mounted client-side
  // Ensure the component is mounted client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // If the component is not yet mounted, return null
  if (!isMounted) return null;

  // Split pathname into path segments
  const pathnames = pathname.split("/").filter(Boolean);

  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        {/* Navbar Flex Container */}
        <div className="flex items-center justify-between h-16">
          {/* Left Section (Home & Breadcrumbs) */}
          <div className="flex items-center space-x-2">
            {pathnames.map((segment, index) => {
              const isRoot = segment === "pages"; // Check if it's the root "pages" segment
              const path = `/${pathnames.slice(0, index + 1).join("/")}`;
              const isLast = index === pathnames.length - 1;

              if (isRoot) {
                return (
                  <motion.div
                    key={index}
                    className="flex items-center"
                    variants={breadcrumbVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Link
                      href="/#start"
                      passHref
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <Home className="w-5 h-5 text-gray-600" />
                    </Link>
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={index}
                  className="flex items-center"
                  variants={breadcrumbVariants}
                  initial="hidden"
                  animate="visible"
                >
                  <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
                  <Link
                    href={path}
                    passHref
                    onClick={() => onNavigate(path)}
                    className={cn(
                      "px-3 py-1.5 rounded-lg transition-colors text-sm font-medium",
                      isLast
                        ? "text-red-600 bg-red-50 hover:bg-red-100"
                        : "text-gray-600 hover:bg-gray-100"
                    )}
                  >
                    {segment.replace(/-/g, " ")}
                  </Link>
                </motion.div>
              );
            })}
          </div>
          {/* Right Section (Logo) */}
          <Link href="https://www.taa.tn/" passHref>
            <motion.img
              src="/images/Logo-TAA.png"
              alt="Logo"
              className="h-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
