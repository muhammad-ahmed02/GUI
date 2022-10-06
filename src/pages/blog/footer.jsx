import "./blog.css";

const Footer = () => {
    return(
        <div className="footer">
           <div className="footerDesc">
                <h3 className="footerhead">GUI Blog</h3>
                <p>
                    Aenean interdum arcu blandit, vehicula magna non, placerat elit. Mauris et pharetratortor. Suspendissea sodales urna. In at augue elit. Vivamus enim nibh, maximus ac felis nec, maximus tempor odio.
                    
                </p>
           </div>

           <div className="footerDesc">
                <h3 className="footerhead">Popular Categories</h3>
                <ul className="footerCat">
                    <li className="footerCatlist">Life</li>
                    <li  className="footerCatlist">Gadget</li>
                    <li  className="footerCatlist">Bussiness</li>
                    <li  className="footerCatlist">Crypto</li>
                    <li  className="footerCatlist">Technology</li>
                    <li  className="footerCatlist">News</li>
                    <li  className="footerCatlist">SEO Service</li>
                    <li  className="footerCatlist">Digital Agency</li>
                    <li  className="footerCatlist">Blogging</li>
                </ul>
           </div> 
           
           <div className="footerDesc">
                <h3 className="footerhead">Navigation</h3>
                <ul className="footerCat">
                    <li className="footerCatlist">Home</li>
                    <li  className="footerCatlist">Blog</li>
                    <li  className="footerCatlist">Categories</li>
                    <li  className="footerCatlist">Single Post</li>
                    <li  className="footerCatlist">About us</li>
                    <li  className="footerCatlist">Contact</li>
                    <li  className="footerCatlist">Login</li>
                    <li  className="footerCatlist">Register</li>
                    <li  className="footerCatlist">Join Team</li>
                </ul>
           </div>

           <div className="footerDesc">
                <h3 className="footerhead">Copyrights</h3>
                <p>
                © Copyright GUIBlog. All Rights Reserved
                Designed by GUI Developmet Team                   
                </p>
           </div>          
        </div>
    )
}

export default Footer;