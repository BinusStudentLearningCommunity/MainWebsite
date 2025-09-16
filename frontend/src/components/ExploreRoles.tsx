"use client";
import { Tangerine } from 'next/font/google';
const tangerine = Tangerine({
  subsets: ['latin'],
  weight: '700',
});


import React, { useState } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: '700',
});
import Image from 'next/image';

type Role = {
  icon: string;
  count: string;
  title: string;
  description: string;
  benefits: string[];
  divisions?: string[];
};

type RoleKey = 'mentor' | 'nindya' | 'mentee';

const divisionMeta: Record<string, { bg: string; icon: string }> = {
  'Human Capital': { bg: '#FF8484', icon: '/HumanCapital.svg' },
  'Learning': { bg: '#FFB084', icon: '/Learning.svg' },
  'Marketing': { bg: '#8498FF', icon: '/Marketing.svg' },
  'Information Technology': { bg: '#C184FF', icon: '/IT.svg' },
};

const rolesData: Record<RoleKey, Role> = {
  mentor: {
    icon: "/mentor-icon.svg",
    count: "30+",
    title: "Mentors",
    description: "Mentor adalah anggota BSLC yang berperan sebagai pengajar dalam kegiatan mentoring. Mentor berasal dari berbagai jurusan di BINUS University untuk memberikan bimbingan belajar bagi para adik kelasnya, atau disebut sebagai Mentee di kegiatan mentoring BSLC.",
    benefits: [
      "Soft Skill", "Networking", "SAT Points", "Certificate",
      "Teaching Experience", "Exclusive Modules", "Exclusive Access to BSLC's Events"
    ]
  },
  nindya: {
    icon: "/nindya-icon.svg",
    count: "60+",
    title: "Nindyas",
    description: "Nindya adalah sebutan untuk pengurus BSLC yang bertugas menangani seluruh kegiatan BSLC, baik kegiatan mentoring, event-event BSLC seperti seminar, kebersamaan, hingga perekrutan Nindya baru itu sendiri. Kata Nindya sendiri diambil dari tingkatan tertinggi di pramuka.",
    benefits: ["Soft Skill", "Networking", "SAT Points", "Certificate", "Knowledge"],
    divisions: ["Human Capital", "Learning", "Marketing", "Information Technology"]
  },
  mentee: {
    icon: "/mentee-icon.svg",
    count: "90+",
    title: "Mentees",
    description: "Mentee adalah siswa/murid dari kegiatan mentoring. Keanggotaan Mentee BSLC hanya dapat berasal dari semester 1 dan 2. Mentee akan dibantu oleh Mentor jika ada kesulitan belajar atau memahami materi kuliah sesuai jurusannya.",
    benefits: ["Soft Skill", "Networking", "SAT Points", "Exclusive Modules"]
  }
};

const CheckIcon = () => (
  <svg className="w-5 h-5 mr-2 text-aqua flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
);

const ExploreRoles = () => {
  const [activeTab, setActiveTab] = useState<RoleKey>('mentor');
  const activeRoleData = rolesData[activeTab];

  return (
    <section id="roles" className="py-20 px-2 sm:px-4 lg:px-6">
      <div className="mx-auto max-w-screen-xl text-center">
        
        <div className="mb-12">
          <p className={`text-4xl ${tangerine.className} font-bold text-aqua`}>Membership</p>
          <h2 className="text-4xl font-poppins font-bold text-slate-800 mt-2">Explore the Roles</h2>
        </div>

        <div className="flex justify-center border-b border-slate-300">
          {(Object.keys(rolesData) as RoleKey[]).map((role) => (
            <button
              key={role}
              onClick={() => setActiveTab(role)}
              className={`py-3 px-6 text-lg font-poppins font-semibold capitalize transition-colors duration-300 ${
                activeTab === role
                  ? 'text-aqua border-b-2 border-aqua'
                  : 'text-slate-500 hover:text-slate-800'
              }`}
            >
              {role}
            </button>
          ))}
        </div>

        <div className="mt-12">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-1 items-center text-left">
            <div className="flex flex-col items-center">
              <Image
                src={activeRoleData.icon}
                alt={`${activeRoleData.title} Icon`}
                width={96}
                height={96}
                className="w-24 h-24 mb-4"
              />
              <p className={`text-4xl ${inter.className} font-bold text-aqua`}>{activeRoleData.count}</p>
              <p className="text-slate-600 text-lg">{activeRoleData.title}</p>
            </div>

            <div>
              <p className="text-slate-600 mb-8 font-poppins font-normal">{activeRoleData.description}</p>
              <div className={activeTab === 'nindya' ? 'grid lg:grid-cols-2 gap-8' : ''}>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-800 mb-4">Benefits</h3>
                  <ul className={`font-poppins font-normal grid grid-cols-1 ${activeTab !== 'nindya' ? 'sm:grid-cols-2' : ''} gap-x-6 gap-y-3 text-slate-700`}>
                    {activeRoleData.benefits.map((benefit: string, index: number) => (
                      <li key={index} className="flex items-center">
                        <CheckIcon />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                {activeTab === 'nindya' && (
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-800 mb-4">Available Division</h3>
                    <div className="flex flex-col space-y-3 font-poppins">
                      {activeRoleData.divisions?.map((division: string, index: number) => {
                        const meta = divisionMeta[division] ?? { bg: '#E5E7EB', icon: '/file.svg' };
                        return (
                          <span
                            key={index}
                            className="group relative inline-flex items-center rounded-lg px-3 py-2 text-white font-normal cursor-pointer w-60"
                            style={{ backgroundColor: meta.bg }}
                          >
                            <span className="flex items-center transition-opacity duration-150 group-hover:opacity-0">
                              <Image src={meta.icon} alt={`${division} icon`} width={20} height={20} className="mr-2" />
                              {division}
                            </span>
                            <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-150 group-hover:opacity-100">
                              View Details
                            </span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <button className="apply-button mt-12 py-3 px-8 font-semibold rounded-lg capitalize">
            Apply As {activeTab}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreRoles;