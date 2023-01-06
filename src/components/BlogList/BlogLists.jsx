import React from 'react';
import Footer from '../common/Footer';
import Subscription from '../common/Subscription';
import BlogHeader from './BlogHeader';

function BlogLists(props) {
    return (
        <>
            <BlogHeader />
            <Subscription />
            <Footer />
        </>
    );
}

export default BlogLists;