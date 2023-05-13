import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BlogData from "../../data/blog/BlogData.json";
import { slugify } from '../../utils';
import { FaPlay, FaAngleRight, FaAngleLeft, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import FsLightbox from 'fslightbox-react';
import Slider from "react-slick";
import ReactPaginate from 'react-paginate';


const allBlogData = BlogData;


const BlogGridOne = () => {

    const [toggler, setToggler] = useState(false);
    
    function SlickNextArrow(props) {
        const { className, onClick } = props;
        return (
          <div className={className} onClick={onClick}><FaAngleRight /></div>
        );
    }

    function SlickPrevArrow(props) {
        const { className, onClick } = props;
        return (
          <div className={className} onClick={onClick}><FaAngleLeft /></div>
        );
    }

    var slideSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SlickNextArrow />,
        prevArrow: <SlickPrevArrow />,
       
    }

    const [blogs] = useState(allBlogData);
    const [pageNumber, setPageNumber] = useState(0);

    const blogsPerPage = 4;
    const pageVisited = pageNumber * blogsPerPage;
    
    const pageCount = Math.ceil(blogs.length / blogsPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    }


    return (
        <>
            {blogs.slice(pageVisited, pageVisited + blogsPerPage).map((data) => (
                <div className="blog-grid" key={data.id}>
                    <h3 className="title">
                        <Link to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>{data.title}</Link>
                    </h3>
                    <div className="author">
                        <div className="info">
                            <h6 className="author-name">
                                <Link to={process.env.PUBLIC_URL + `/archive/${slugify(data.author_name)}`}>{data.author_name}</Link>
                            </h6>
                            <ul className="blog-meta list-unstyled">
                                <li>{data.post_date}</li>
                                <li>{data.read_time}</li>
                            </ul>
                        </div>
                    </div>
                   
                    <p>{data.excerpt}</p>
                    <Link className="axil-btn btn-borderd btn-large" to={process.env.PUBLIC_URL + `/blog-details/${data.id}`}>Read More</Link>
                </div>
            ))}

            <ReactPaginate
                previousLabel={<FaArrowLeft />}
                nextLabel={<FaArrowRight />}
                pageCount= {pageCount}
                onPageChange={changePage}
                containerClassName={"pagination justify-content-start"}
                previousLinkClassName={"prev"}
                nextLinkClassName={"next"}
                disabledClassName={"disabled"}
                activeClassName={"current"}
            />

        </>
    )
}

export default BlogGridOne;