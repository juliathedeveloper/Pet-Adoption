/**
 * Image gallery component: 
 *  -renders the display of the full sized and thumbnail images
 *  -controls the toggling between the full sized and thumbnail images
 */

import React, {Component} from 'react';
import dogs from '../assets/data/dogs.json';

class Gallery extends Component{

    // Get the dogs array from the JSON file
    dogs = dogs.dogs;

    state = {
        fullImage: false,
        clickedImg: "" 
    }

    // This handles the click from the thumbnail image, the full size image, and the close button
    handleImageClick = (e) => {
        e.preventDefault();
        this.setState({ 
            fullImage: !this.state.fullImage,
            clickedImg: e.target.src
        });
    };

    // Toggle display of full size and thumbnail images
    render(){
        return(
            <div id="site-gallery">  
                {
                    this.state.fullImage && (        
                        <div id="fullSizeArea">                
                            <img id="fullSizeImg"
                                alt='full size'
                                onClick={this.handleImageClick}
                                src={this.state.clickedImg}
                            /> 
                            <button class="closeBtn" onClick={this.handleImageClick}>X</button>                     
                        </div> 
                    )
                }                
                {
                    !this.state.fullImage ?  
                    <div id="thumbnails">
                        <div id="imgs">
                        {
                            this.dogs.map((dog, idx) => {
                                return(
                                    <div>
                                        <img 
                                            alt={`dog thumbnail${idx}`}
                                            key={idx}
                                            onClick={this.handleImageClick}
                                            src={process.env.PUBLIC_URL + dog.image} 
                                        /> 
                                    </div>
                                )
                            })
                        } 
                        </div>
                    </div>
                    : null
                }
            </div>
        )
    }
}

export default Gallery;