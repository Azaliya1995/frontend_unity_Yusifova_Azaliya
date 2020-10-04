import React, {useEffect} from "react";
import {setLoading, setPhotosListAsync} from "../reducers/PhotosListReducer";
import {connect} from "react-redux";
import {useMount} from "react-use";
import Photo from "./Photo";
import Masonry from 'react-masonry-css'

const PhotosList = (props) => {

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };
    let pages = 0;

    useMount(() => props.setPhotosList(++pages));

    const trackScrolling =() => {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            //Todo
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', trackScrolling);
        return function cleanup() {
            document.removeEventListener('scroll', trackScrolling);
        };
    });

    return (
        <div id={'mainLayout'}>
            { props.photosList && <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {props.photosList.map((el) => <Photo key={"photo" + el.id} data={el}/>)}
            </Masonry>}
        </div>
    )
};

const mapStateToProps = (state) => ({
    photosList: state.photosListPage.photosList,
    loading: state.photosListPage.loading
});

const mapDispatchToProps = (dispatch) => ({
    setPhotosList: (page) => dispatch(setPhotosListAsync(page)),
    setLoading: (loading) => dispatch(setLoading(loading))
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotosList);
