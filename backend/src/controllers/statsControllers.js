import { Song } from "../models/songModel.js";
import { User } from "../models/userModel.js";
import { Album } from "../models/albumModel.js";

export const getstats = async (req, res, next) => {
   try {
        // const totalSongs = await Song.countDocuments();
        // const totalUsers = await User.countDocuments();
        // const totalAlbms = await Album.countDocuments();

        const [totalsongs, totalAlbums, totalUsers, uniqueArtists ] = await Promise.all([
            Song.countDocuments(), 
            Album.countDocuments(), 
            User.countDocuments(),

            Song.aggregate([
                {
                    $unionWith: { 
                        coll: "albums", 
                        pipeline: [],
                    },
                },
                {
                    $group: {
                        _id: "$artist",
                    },
                },
                {
                    $count: "count"
                },
            ])
        ]);

        res.status(200).json({
            totalsongs,
            totalAlbums,
            totalUsers,
            totalArtists: uniqueArtists[0]?.count || 0
        })
    } catch (error) {
        console.log("Error in getstats", error);
        next(error);
    }
}