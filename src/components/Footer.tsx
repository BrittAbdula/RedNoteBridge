import React from 'react';
import { Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-[#111] text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold text-white">RedNoteBridge</h2>
                        <p className="text-gray-400">
                        RedNote Without Borders
                        </p>
                    </div>

                    {/* Tools Section */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Tools</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/tools/name-generator" className="hover:text-white transition-colors">
                                    Name Generator
                                </Link>
                            </li>
                            <li>
                                <Link href="/tools/name-translator" className="hover:text-white transition-colors">
                                    Name Translator
                                </Link>
                            </li>
                            <li>
                                <Link href="/tools/style-translator" className="hover:text-white transition-colors">
                                    Style Translator
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Resources</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/blog" className="hover:text-white transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/#faq" className="hover:text-white transition-colors">
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Section */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Legal</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy" className="hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-white transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookies" className="hover:text-white transition-colors">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-gray-400">
                            © {new Date().getFullYear()} RedNoteBridge. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="https://twitter.com" className="hover:text-white" aria-label="Twitter">
                            <Twitter className="h-5 w-5" />
                        </a>
                        <a href="https://instagram.com" className="hover:text-white" aria-label="Instagram">
                            <Instagram className="h-5 w-5" />
                        </a>
                        <a href="https://linkedin.com" className="hover:text-white" aria-label="LinkedIn">
                            <Linkedin className="h-5 w-5" />
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
