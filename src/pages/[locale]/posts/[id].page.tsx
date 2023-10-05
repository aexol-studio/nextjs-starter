import { Layout } from '@/src/layouts/layout';
import { getAllPostIds, getPostData } from '@/lib/posts';


const Page = ({ postData }: UnwrapStaticPromiseProps<typeof getStaticProps>) => {
    return (
        <Layout pageTitle={postData.title}>
            <article>
                <h1>{postData.title}</h1>
                <div>
                    <p>{postData.date}</p>
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
};


export async function getStaticPaths() {
    const locales = ['pl', 'en'];
    const postIds = getAllPostIds(locales);
  
    return {
      paths: postIds,
      fallback: false,
    };
  }

export const getStaticProps = async ({
    params,
}: {
    params: {
        id: string;
    };
}) => {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData,
        },
    };
};


export default Page;
