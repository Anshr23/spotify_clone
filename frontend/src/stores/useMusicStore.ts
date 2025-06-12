import { axiosInstance } from '@/lib/axios';
import type { Album, Song, Stats } from '@/lib/types';
import toast from 'react-hot-toast';
import {create } from 'zustand';


interface MusicStore {
    songs: Song[];
    albums: Album[];
    isLoading: boolean;
    error: string | null;
    currentAlbum: Album | null;
    featuredSongs: Song[];
    madeForYouSongs: Song[];
    trendingSongs: Song[];
    stats:Stats;

    fetchAlbums: () => Promise<void>;
    fetchAlbumById: (albumId: string) => Promise<void>;
    fetchFeaturedSongs: () => Promise<void>;
    fetchMadeForYouSongs: () => Promise<void>;
    fetchTrendingSongs: () => Promise<void>;
    fetchStats: () => Promise<void>;
    fetchSongs: () => Promise<void>;
    deleteSong: (songId: string) => Promise<void>;
    deleteAlbum: (albumId: string) => Promise<void>;

};


export const useMusicStore = create<MusicStore>((set) => ({
    albums: [],
    songs: [],
    isLoading: false,
    error: null,
    currentAlbum: null,
    featuredSongs: [],
    madeForYouSongs: [],
    trendingSongs: [],
    stats: {
        totalSongs: 0,
        totalAlbums: 0,
        totalUsers: 0,
        totalArtists: 0
    },

    deleteSong: async (songId: string) => {
        set({ isLoading: true, error: null });
        try {
            await axiosInstance.delete(`/admin/songs/${songId}`);
            set((state) => ({
                songs: state.songs.filter((song) => song._id !== songId),
                error: null
            }));
            toast.success("Song deleted successfully");
        } catch (error: any) {
            toast.error("Failed to delete song", error.message);
        } finally {
            set({ isLoading: false });
        }
    },

    deleteAlbum: async (albumId: string) => {
        set({ isLoading: true, error: null });
        try {
            await axiosInstance.delete(`/admin/albums/${albumId}`);
            set((state) => ({
                albums: state.albums.filter((album) => album._id !== albumId),
                songs: state.songs.map((song) => 
                    song.albumId === state.albums.find((album) => album._id === albumId)?.title? {...song, albumId: null } : song
                ),
            }));
            toast.success("Album deleted successfully");
        } catch (error: any) {
            toast.error("Failed to delete album", error.message);
        } finally {
            set({ isLoading: false });
        }
    },

    fetchSongs: async () => {
		set({ isLoading: true, error: null });
		try {
			const response = await axiosInstance.get("/songs");
			set({ songs: response.data });
		} catch (error: any) {
			set({ error: error.message });
		} finally {
			set({ isLoading: false });
		}
	},

	fetchStats: async () => {
		set({ isLoading: true, error: null });
		try {
			const response = await axiosInstance.get("/stats");
			set({ stats: response.data });
		} catch (error: any) {
			set({ error: error.message });
		} finally {
			set({ isLoading: false });
		}
	},

    fetchAlbums: async () => {
        //data fetching logic here
        set({ isLoading: true, error: null });

        try {
            const response = await axiosInstance.get('/albums');
            set({ albums: response.data });
        } catch (error: any) {
            set({ error: error.response.data.message });
        } finally {
            set({ isLoading: false });
        }
    },

    fetchAlbumById: async (albumId: string) => {
        set({ isLoading: true, error: null });

        try {
            const response = await axiosInstance.get(`/albums/${albumId}`);
            set({ currentAlbum: response.data });
        } catch (error: any) {
            set({ error: error.response.data.message });
        } finally {
            set({ isLoading: false });
        }
    },

    fetchFeaturedSongs: async () => {
        set({isLoading: true, error: null });
        try {
            const response = await axiosInstance.get('/songs/featured');
            set({ featuredSongs: response.data });
        } catch (error: any) {
            set({ error: error.response.data.message });
        } finally {
            set({ isLoading: false });
        }
    },

    fetchMadeForYouSongs: async () => {
        set({isLoading: true, error: null });
        try {
            const response = await axiosInstance.get('/songs/made-for-you');
            set({ madeForYouSongs: response.data });
        } catch (error: any) {
            set({ error: error.response.data.message });
        } finally {
            set({ isLoading: false });
        }
    },

    fetchTrendingSongs: async () => {
        set({isLoading: true, error: null });
        try {
            const response = await axiosInstance.get('/songs/trending');
            set({ trendingSongs: response.data });
        } catch (error: any) {
            set({ error: error.response.data.message });
        } finally {
            set({ isLoading: false });
        }
    }

}));