import "./blog.css";
import blog_1 from "../../assets/blog/1100x750.jpg";
import blog_2 from "../../assets/blog/800x460.jpg";

const Blog = () => {
    return(
        <div>
            {/* begginning of blog header */}
            <div className="header">
                <img src={blog_1} alt="blog_header_frame" className="header_img" />
                <div className="headerDesc">
                    <h6><i>Technology</i></h6><br/>
                    <h4>We visited the ancient theater in Macedonia</h4>
                    <p>
                            Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.
                    </p>
                </div>
            </div>
            {/* end of blog header */}

            {/* begginning of blog body */}
            <div className="blog">
                <div className="blog_desc">
                        <img src={blog_2} alt="blog_frame" className="blog_2" />
                        <h6><i>Technology</i></h6><br/>
                        <h4>We visited the ancient theater in Macedonia</h4>
                        <p>
                            Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.
                        </p>
                </div>

                <div className="blog_desc">
                        <img src={blog_2} alt="blog_frame" className="blog_2" />
                        <h6><i>Gadget</i></h6><br/>
                        <h4>We visited the ancient theater in Macedonia</h4>
                        <p>
                            Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.
                        </p>
                </div>

                <div className="blog_desc">
                        <img src={blog_2} alt="blog_frame" className="blog_2" />
                        <h6><i>Crypto</i></h6><br/>
                        <h4>We visited the ancient theater in Macedonia</h4>
                        <p>
                            Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.
                        </p>
                </div>


                <div className="blog_desc">
                        <img src={blog_2} alt="blog_frame" className="blog_2" />
                        <h6><i>Bussiness</i></h6><br/>
                        <h4>We visited the ancient theater in Macedonia</h4>
                        <p>
                            Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.
                        </p>
                </div>

                <div className="blog_desc">
                        <img src={blog_2} alt="blog_frame" className="blog_2" />
                        <h6><i>Technology</i></h6><br/>
                        <h4>We visited the ancient theater in Macedonia</h4>
                        <p>
                            Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.
                        </p>
                </div>

                <div className="blog_desc">
                        <img src={blog_2} alt="blog_frame" className="blog_2" />
                        <h6><i>Technology</i></h6><br/>
                        <h4>We visited the ancient theater in Macedonia</h4>
                        <p>
                            Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.
                        </p>
                </div>

                <div className="blog_desc">
                        <img src={blog_2} alt="blog_frame" className="blog_2" />
                        <h6><i>Bussiness</i></h6><br/>
                        <h4>We visited the ancient theater in Macedonia</h4>
                        <p>
                            Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.
                        </p>
                </div>

                <div className="blog_desc">
                        <img src={blog_2} alt="blog_frame" className="blog_2" />
                        <h6><i>Life</i></h6><br/>
                        <h4>We visited the ancient theater in Macedonia</h4>
                        <p>
                            Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.
                        </p>
                </div>

                <div className="blog_desc">
                        <img src={blog_2} alt="blog_frame" className="blog_2" />
                        <h6><i>News</i></h6><br/>
                        <h4>We visited the ancient theater in Macedonia</h4>
                        <p>
                            Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh.
                        </p>
                </div>
            </div>
            {/* end of blog body */}
        </div>
       
    )
}

export default Blog;