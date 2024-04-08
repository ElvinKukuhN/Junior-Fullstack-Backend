/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

interface IComment {
    commentId: number;
    commentContent: string;
    replies?: IComment[];
}

const comments: IComment[] = [
    {
        commentId: 1,
        commentContent: 'Hai',
        replies: [
            {
                commentId: 11,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 111,
                        commentContent: 'Haai juga hai jugaa',
                    },
                    {
                        commentId: 112,
                        commentContent: 'Haai juga hai jugaa',
                    },
                ],
            },
            {
                commentId: 12,
                commentContent: 'Hai juga',
                replies: [
                    {
                        commentId: 121,
                        commentContent: 'Haai juga hai jugaa',
                    },
                ],
            },
        ],
    },
    {
        commentId: 2,
        commentContent: 'Halooo',
    },
];

@Controller('comments')
export class Case2Controller {
    @Get('total')
    getTotalComments(): { success: boolean; totalComments: number } {
        const total = this.countTotalComments(comments);
        return { success: true, totalComments: total };
    }

    public countTotalComments(comments: IComment[]): number {
        let total = comments.length;

        comments.forEach(comment => {
            if (comment.replies && comment.replies.length > 0) {
                total += this.countTotalComments(comment.replies);
            }
        });

        return total;
    }
}
