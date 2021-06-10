import { Injectable } from '@angular/core';
import { BlogPostInterface } from 'lib/interfaces/blog-post-interface';
import { ServerService } from '../http-server/server.service';

@Injectable({
	providedIn: 'root'
})
export class BlogPostsService {

	constructor(private serverService: ServerService) { }

	addBlogPost(blogPost: BlogPostInterface) {
		return this.serverService.post('blogposts', blogPost).then(data => data.data || null);
	}

	updateBlogPost(blogPostId: number, changes: BlogPostInterface) {
		return this.serverService.put(`blogposts/${blogPostId}`, changes).then(data => data.data || null);
	}

	deleteBlogPost(blogPostId: number) {
		return this.serverService.delete(`blogposts/${blogPostId}`).then(data => data.data || null);
	}

	getBlogPosts() {
		return this.serverService.get('blogposts').then((data) => data.data || []);
	}

	getBlogPostById(blogPostId: number) {
		return this.serverService.get(`blogposts/${blogPostId}`).then((data) => data.data || []);
	}
}
