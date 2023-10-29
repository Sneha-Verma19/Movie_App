import React, { useEffect, useState } from "react";
import { View, Text } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import { GET } from '../Services/API';
import { IMAGE_POSTER_URL } from '../Config';
import deprecatedPropType from 'deprecated-react-native-prop-types';
import Constants from "../Constants";


const DiscoverMovies = () => {
    const [movies, setMovies] = useState([]);
    const [images, setImages] = useState([]);
    


    useEffect(() => {
        const getMovies = async () => {
            const response = await GET('/discover/movie');

            setMovies(response.results);

            





            const images = response.results.map((data) => `${IMAGE_POSTER_URL}${data.backdrop_path}`);
            
            let backImages = [];
            
            for (let i = 0; i < 12; ++i) {
                backImages = [...backImages, images[i]];
            }
            setImages(backImages);
        };
        getMovies();
    }, []);
    

    return (
        <View>
            <SliderBox
                images={images} dotColor={Constants.secondaryColor}
                imageComponent={deprecatedPropType.component}
                ImageComponent={deprecatedPropType.component}
                
            />
           

           

        </View>
    );
};

export default DiscoverMovies;



