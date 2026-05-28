import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(),'content/blog');

export default function getPosts(){
    const fileNames = fs.readdirSync(postsDirectory);
    const allPosts = fileNames.map((fileName)=>{
        const slug = fileName.replace(/\.md$/,"");
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);
        return {
            slug,
            title: data.title,
            date: data.date,
            excerpt: data.excerpt,
            tags: data.tags || [],
            coverImage: data.coverImage || null,
            content
        };
    });
    return allPosts.sort((a,b)=> new Date(b.date) - new Date(a.date));
}

export function getPostBySlug(slug){
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath,'utf8');
    const {data,content} = matter(fileContents);

    return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        tags: data.tags || [],
        coverImage: data.coverImage || null,
        content
    };
}