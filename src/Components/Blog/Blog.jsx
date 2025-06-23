
const Blog = ({ blog }) => {

    const { cover, author_img, author_name, post_date,read_time, title, hashtag } = blog;

    return (
        <div className="border-2  p-2 rounded-lg mb-6">
            <img className="rounded-lg mb-9" src={cover} alt="" />
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <img className="w-18" src={author_img} />
                    <div className="ml-3">
                        <h4 className="text-lg font-semibold">{author_name}</h4>
                        <p>{post_date}</p>
                    </div>
                </div>
                <p>
                    <span>{read_time} min read</span>
                </p>
            </div>
            <h2 className="text-xl font-bold my-4">{title}</h2>

            <p>
                {
                    hashtag.map(hash => <span className="ml-2"><a href="">{hash}</a></span>)
                }
            </p>
            
        </div>
    );
};

export default Blog;