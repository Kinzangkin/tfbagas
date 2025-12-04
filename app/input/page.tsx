"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase-client"
import { FiTrash2, FiPlus } from "react-icons/fi"
import { useCallback } from "react"

const AVAILABLE_TAGS = ["amv", "jedag jedug", "3d", "overlay"]

interface Media {
    id: number
    title: string
    media: string
    type: string
    created_at: string
}

export default function Page() {
    const [mediaList, setMediaList] = useState<Media[]>([])
    const [title, setTitle] = useState("")
    const [link, setLink] = useState("")
    const [selectedTags, setSelectedTags] = useState<string[]>([])
    const [loading, setLoading] = useState(false)
    const [isLoadingData, setIsLoadingData] = useState(true)

    const loadMedia = useCallback(async () => {
        setIsLoadingData(true)
        try {
            const { data, error } = await supabase
                .from("tfbagasMedia")
                .select("*")
                .order("created_at", { ascending: false })

            if (error) throw error
            setMediaList(data || [])
        } catch (error) {
            console.error("Error loading media:", error)
        } finally {
            setIsLoadingData(false)
        }
    }, [supabase])

    useEffect(() => {
        console.log("[v0] Supabase URL being used:", process.env.NEXT_PUBLIC_SUPABASE_URL)
        console.log("[v0] Supabase Anon Key:", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "SET" : "NOT SET")

        loadMedia()
    }, [loadMedia])

    const handleAddMedia = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!title.trim()) {
            alert("Please enter a title")
            return
        }

        if (!link.trim()) {
            alert("Please enter a link")
            return
        }

        if (selectedTags.length === 0) {
            alert("Please select at least one tag")
            return
        }

        setLoading(true)
        try {
            const { error } = await supabase.from("tfbagasMedia").insert({
                title: title.trim(),
                media: link.trim(),
                type: selectedTags.join(", "),
            })

            if (error) throw error

            setTitle("")
            setLink("")
            setSelectedTags([])
            await loadMedia()
        } catch (error) {
            console.error("Error adding media:", error)
            alert("Failed to add media")
        } finally {
            setLoading(false)
        }
    }

    const handleDeleteMedia = async (id: number) => {
        if (!confirm("Are you sure you want to delete this media?")) return

        try {
            const { error } = await supabase.from("tfbagasMedia").delete().eq("id", id)

            if (error) throw error
            await loadMedia()
        } catch (error) {
            console.error("Error deleting media:", error)
            alert("Failed to delete media")
        }
    }

    const toggleTag = (tag: string) => {
        setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]))
    }

    return (
        <main className="min-h-screen bg-linear-to-br from-slate-900 to-slate-800 p-6">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl font-bold text-white mb-2">Media Dashboard</h1>
                    <p className="text-slate-400">Kelola link media dengan tag yang berbeda</p>
                </div>

                {/* Form Card */}
                <div className="bg-slate-800 rounded-lg border border-slate-700 p-8 mb-12 shadow-lg">
                    <h2 className="text-xl font-semibold text-white mb-6">Tambah Media Baru</h2>
                    <form onSubmit={handleAddMedia} className="space-y-6">
                        {/* Title Input */}
                        <div>
                            <label className="block text-sm font-medium text-slate-200 mb-2">Judul</label>
                            <input
                                type="text"
                                placeholder="Masukkan judul media"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                disabled={loading}
                                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
                            />
                        </div>

                        {/* Link Input */}
                        <div>
                            <label className="block text-sm font-medium text-slate-200 mb-2">URL Link</label>
                            <input
                                type="url"
                                placeholder="https://example.com"
                                value={link}
                                onChange={(e) => setLink(e.target.value)}
                                disabled={loading}
                                className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
                            />
                        </div>

                        {/* Tags Selection */}
                        <div>
                            <label className="block text-sm font-medium text-slate-200 mb-3">Pilih Tag</label>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {AVAILABLE_TAGS.map((tag) => (
                                    <div key={tag} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id={tag}
                                            checked={selectedTags.includes(tag)}
                                            onChange={() => toggleTag(tag)}
                                            disabled={loading}
                                            className="w-4 h-4 rounded border-slate-600 text-blue-600 focus:ring-2 focus:ring-blue-500 disabled:opacity-50 cursor-pointer"
                                        />
                                        <label htmlFor={tag} className="ml-2 text-sm text-slate-300 cursor-pointer">
                                            {tag}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                        >
                            <FiPlus className="w-4 h-4" />
                            {loading ? "Menambahkan..." : "Tambah Media"}
                        </button>
                    </form>
                </div>

                {/* Media List */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-6">Media Anda ({mediaList.length})</h2>

                    {isLoadingData ? (
                        <div className="text-center py-16">
                            <p className="text-slate-400">Memuat media...</p>
                        </div>
                    ) : mediaList.length === 0 ? (
                        <div className="bg-slate-800 rounded-lg border border-slate-700 p-12 text-center">
                            <p className="text-slate-400">Belum ada media. Tambahkan media pertama Anda sekarang!</p>
                        </div>
                    ) : (
                        <div className="grid gap-4">
                            {mediaList.map((item) => (
                                <div
                                    key={item.id}
                                    className="bg-slate-800 rounded-lg border border-slate-700 p-6 shadow-lg hover:border-slate-600 transition"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="flex-1 min-w-0">
                                            <h3 className="font-semibold text-lg text-white mb-2">{item.title}</h3>
                                            <a
                                                href={item.media}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-400 hover:text-blue-300 underline break-all text-sm"
                                            >
                                                {item.media}
                                            </a>
                                            <div className="mt-4 flex flex-wrap gap-2">
                                                {item.type.split(", ").map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="inline-block px-3 py-1 bg-blue-900 text-blue-200 text-xs rounded-full font-medium"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <p className="text-xs text-slate-400 mt-3">
                                                {new Date(item.created_at).toLocaleDateString("id-ID")}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => handleDeleteMedia(item.id)}
                                            className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition duration-200 shrink-0"
                                        >
                                            <FiTrash2 className="w-4 h-4" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </main>
    )
}
