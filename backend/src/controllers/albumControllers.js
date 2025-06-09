import { Album } from "../models/albumModel.js";

export const getAllAlbums = async (req, res, next) => {
    try {
        const albums = await Album.find();

        res.status(200).json(albums);
    } catch (error) {
        console.log("Error in getAllAlbums", error);
        next(error);
    }
};

export const getAlbumById = async (req, res, next) => {
    try {
        const {albumId} = req. params;
        const album = await Album. findById(albumId).populate("songs");  //populate function is very imp. i joins diff. table in the mongodb

        if(!album){
            res.status(404).json({message:"album not found"});
        }

        res.status(200).json(album);
    } catch (error) {
        console.log("Error in getAlbumById", error);
        next(error);
    }
};