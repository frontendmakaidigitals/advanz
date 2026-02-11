"use client";
import Image from "next/image";
import FAQE from "../sections/homepage/complete-faq";
export default function Page() {
  return (
    <main>
      <section className="relative min-h-screen bg-gradient-to-br from-[#000a11] via-[#00080d] to-[#000a11] flex items-center justify-center">
        {/* Main Container */}
        <div className="relative w-full min-h-screen py-24 bg-black/30 backdrop-blur-xl border border-white/5">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* LEFT GLASS CARD */}
            <div className="relative h-full flex flex-col justify-between items-start rounded-2xl bg-white/5 border border-white/10 p-10">
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src="/contact/Car-Body-Work.jpg"
                  alt="Aerium App"
                  fill
                  className="object-cover drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
                />
              </div>
              <div className="bg-black/60 absolute z-10 inset-0" />
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl  text-white font-medium leading-tight">
                  Have any questions?
                  <br />
                  <span className="italic text-white/90">Contact us now</span>
                </h2>

                <p className="mt-4 text-sm text-white/55 max-w-md ">
                  Whether you're exploring Aerium, need support, or want to
                  discuss compatibility, our team is ready to help.
                </p>
              </div>

              {/* IMAGE */}

              {/* SOCIAL */}
              <div className="mt-28 lg:mt-8 flex gap-6 flex-wrap text-sm text-white/45 relative z-10">
                <p>info@advanztech.com</p>
                <p>support@advanztech.com</p>
              </div>
            </div>

            <form className="space-y-6 max-w-lg">
              <div>
                <label className="text-sm text-white/50">Full Name</label>
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <input
                    className="bg-white/40 placeholder:text-slate-300 backdrop-blur-2xl w-full px-5 py-1.5"
                    placeholder="First Name"
                  />
                  <input
                    className="bg-white/40 placeholder:text-slate-300 backdrop-blur-2xl w-full px-5 py-1.5"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm text-white/50">Email Address</label>
                <input
                  className="bg-white/40 placeholder:text-slate-300 backdrop-blur-2xl w-full px-5 py-1.5 mt-2"
                  placeholder="Email Address"
                />
              </div>

              <div>
                <label className="text-sm text-white/50">Phone Number</label>
                <input
                  className="bg-white/40 placeholder:text-slate-300 backdrop-blur-2xl w-full px-5 py-1.5 mt-2"
                  placeholder="+1 Phone"
                />
              </div>

              <div>
                <label className="text-sm text-white/50">Topic</label>
                <select className="bg-white/40 placeholder:text-slate-300 backdrop-blur-2xl w-full px-5 py-1.5 mt-2">
                  <option>General Inquiry</option>
                  <option>Support</option>
                  <option>Partnership</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-white/50">Message</label>
                <textarea
                  rows={4}
                  className="bg-white/40 placeholder:text-slate-300 backdrop-blur-2xl w-full px-5 py-1.5 mt-2 resize-none"
                  placeholder="Your Message"
                />
              </div>

              <div className="flex items-center gap-3 text-sm text-white/50">
                <input type="checkbox" className="accent-white" />
                <span>I agree to be contacted regarding this inquiry.</span>
              </div>

              <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-white text-black px-7 py-2.5 text-sm hover:bg-white/90 transition">
                Send Message →
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className=" py-10">
        <div className="container ">
          <div className="mb-10">
            <h1 className="text-4xl text-slate-50 font-[600] ">
              Easily Find Us on Google Maps
            </h1>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4985.687092102214!2d55.231789767114485!3d25.11668111074892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6994feb5fdf1%3A0x885a3f7b670c18ef!2sAdvanz%20Tech!5e0!3m2!1sen!2sin!4v1770018458823!5m2!1sen!2sin"
            className="h-[400px] w-full"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <FAQE />
    </main>
  );
}
