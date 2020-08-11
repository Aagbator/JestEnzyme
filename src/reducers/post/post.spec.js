import { types } from '../../actions/types';
import postsReducer from './post.reducer';

describe('Post Reducer', () => {
    it('should retun default state', () => {
        const newState = postsReducer(undefined, {});
        expect(newState).toEqual([]);
    });

    it('should retun new state if recieving type', () => {
        const posts = [{title: 'Test 1'}, { title: 'Test 2'}];
        const newState = postsReducer(undefined, {
            type: types.GET_POSTS,
            payload: posts
        });
        expect(newState).toEqual(posts);
    })
})