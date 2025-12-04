"use client"
import Card from './ui/Card'
import React, { useState, useEffect } from 'react'
import { createClient } from "@/lib/supabase-client"

type MediaItem = {
  id: number
  title: string
  media: string
  type: string
  created_at: string
}


function Portofolio() {
  const [projects, setProjects] = useState<MediaItem[]>([])
  const [activeTab, setActiveTab] = useState("all")
  const [showAll, setShowAll] = useState(false)
  const [loading, setLoading] = useState(true)
  
  const tabs = [
    { id: "all", label: "All" },
    { id: "Amv", label: "AMV" },
    { id: "Jj", label: "Jedag-Jedug" },
    { id: "Overlay", label: "Overlay"},
    { id: "3d", label: "3d"},
  ]
  
  // Ambil data dari Supabase
  useEffect(() => {
    const supabase = createClient()
    const load = async () => {
      const { data, error } = await supabase
        .from("tfbagasMedia")
        .select("*")
        .order("created_at", { ascending: false })
        .order("id", { ascending: true })

      if (!error && data) setProjects(data)
      setLoading(false)
    }

    load()
  }, [])

  // Filter tab (sesuaikan dengan type dari DB)
  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.type.toLowerCase().includes(activeTab.toLowerCase()))

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 6)

  return (
    <div id='porto' className='flex flex-col justify-center items-center space-y-10 my-20'>

      {/* Judul */}
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl'>My <span className='text-base'>Portofolio</span></h1>
        <p>A showcase of my recent work and creative projects</p>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 text-sm mx-7">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveTab(tab.id)
              setShowAll(false)
            }}
            className={`relative z-10 px-5 py-2 text-sm font-medium rounded-full transition-all cursor-pointer bg-base text-white ${
              activeTab === tab.id ? "text-white" : "text-gray-400"
            }`}
          >
            <span className="hidden sm:inline">{tab.label}</span>
            <span className="inline sm:hidden">
              {tab.id === "Amv"
                ? "AMV"
                : tab.id === "Jj"
                ? "Jedag-Jedug"
                : tab.id === "Overlay"
                ? "Overlay"
                : tab.id === "3d"
                ? "3D"
                : "All"}
            </span>
          </button>
        ))}
      </div>

      {/* Loading state */}
      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <div className="grid sm:grid-cols-3 gap-5">
          {displayedProjects.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              media={item.media}
              type={item.type}
            />
          ))}
        </div>
      )}

      {/* Show more */}
      {filteredProjects.length > 6 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  )
}

export default Portofolio