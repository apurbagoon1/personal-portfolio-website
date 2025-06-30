import React, { useRef } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = formRef.current;

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !subject || !message) {
            Swal.fire({
                icon: "error",
                title: "All fields are required!",
                text: "Please fill out every field before submitting.",
                confirmButtonColor: "#8b5cf6",
            });
            return;
        }

        Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Thank you for reaching out. I’ll get back to you soon.",
            confirmButtonColor: "#06b6d4",
        });

        form.reset();
    };

    return (
        <section className="bg-[#141e36] text-gray-300 py-16 px-4 md:px-8" id="contact">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold text-white">
                        Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Touch</span>
                    </h2>
                    <div className="h-1 w-24 mx-auto bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse my-4"></div>
                    <p className="text-gray-300 md:text-lg max-w-xl mx-auto">
                        Feel free to reach out for collaborations or just a friendly hello
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-start">
                    {/* Left Contact Info */}
                    <div className="space-y-6 md:mt-4">
                        <h3 className="text-xl md:text-2xl font-semibold">Contact Information</h3>
                        <p className="text-gray-400 max-w-lg">
                            I'm open for new opportunities and collaborations. If you're hiring or have a project in mind, feel free to reach out.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-purple-400 text-xl animate-pulse" />
                                <div>
                                    <h4 className="font-semibold text-white">Email</h4>
                                    <p>apurbagoon1@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaPhoneAlt className="text-purple-400 text-xl animate-pulse" />
                                <div>
                                    <h4 className="font-semibold text-white">Phone</h4>
                                    <p>+8801793895474</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-purple-400 text-xl animate-pulse" />
                                <div>
                                    <h4 className="font-semibold text-white">Location</h4>
                                    <p>Kaliganj, Gazipur, Dhaka</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-5 pt-4">
                            <a href="#" className="text-xl md:text-2xl p-2.5 bg-[#1e293b]/70 rounded-full hover:text-cyan-400 hover:scale-110 transition-transform">
                                <FaGithub />
                            </a>
                            <a href="#" className="text-xl md:text-2xl p-2.5 bg-[#1e293b]/70 rounded-full hover:text-cyan-400 hover:scale-110 transition-transform">
                                <FaLinkedin />
                            </a>
                            <a href="#" className="text-xl md:text-2xl p-2.5 bg-[#1e293b]/70 rounded-full hover:text-cyan-400 hover:scale-110 transition-transform">
                                <FaTwitter />
                            </a>
                        </div>
                    </div>

                    {/* Right Contact Form */}
                    <form ref={formRef}
                        onSubmit={handleSubmit} className="bg-[#1e293b]/70 p-6 rounded-xl shadow-md space-y-6">
                        <h3 className="text-xl font-semibold mb-3 text-white">Send Me a Message</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 rounded-md bg-[#141e36]/40 border border-gray-600 focus:border-cyan-400 focus:outline-none transition"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-2 rounded-md bg-[#141e36]/40 border border-gray-600 focus:border-purple-400 focus:outline-none transition"
                            />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="w-full px-4 py-2 rounded-md bg-[#141e36]/40 border border-gray-600 focus:border-purple-400 focus:outline-none transition"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            className="w-full px-4 py-2 rounded-md bg-[#141e36]/40 border border-gray-600 focus:border-cyan-400 focus:outline-none transition"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full py-3 flex items-center justify-center gap-2 rounded-md bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-medium cursor-pointer hover:opacity-80 transition"
                        >
                            Send Message <FaPaperPlane className="text-sm" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
