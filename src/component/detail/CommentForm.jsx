import { Button, Chip, Divider, Sheet, Stack, Typography } from '@mui/joy';
import React, { useEffect, useState } from 'react';
import CommentInput from '../common/CommentInput';
import { ChatBubble, SendRounded, VerifiedUserRounded } from '@mui/icons-material';
import { useFetch } from '../../hook/useFetch';

const CommentForm = () => {

    const [input, setInput] = useState({ username: '', content: '' });
    const [listComment, setListComment] = useState([]);

    const { data } = useFetch('comment', {}, (data) => setListComment(data))

    const {refetch : refetchPOST, data: postedData} = useFetch('comment', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        data: { username: input.username, content: input.content }
    }, (data) => listComment.push(data))


    const handleSubmit = (e) => {
        e.preventDefault();
        refetchPOST();
        setInput({ username: '', content: '' });
    }

    return (
        <form onSubmit={handleSubmit}>

            <Chip sx={{ mb: 1 }} endDecorator={<ChatBubble />} >
                LIVE CHAT
            </Chip>

            {/* Chat box */}
            <Sheet
                variant="soft"
                color="neutral"
                sx={{
                    p: 2,
                    height: '265px',
                    overflowY: 'scroll'
                }}>
                {
                    listComment.map((comment) => (
                        <Typography key={comment?._id} fontSize={13} fontWeight={500} mb={3}
                        >
                            <Typography variant="solid">{comment?.username}</Typography>{" "}
                            {comment?.content}
                        </Typography>

                    ))
                }

            </Sheet>

            <Stack spacing={1}>
                <CommentInput placeholder='type your name' size='sm'
                    value={input?.username}
                    onChange={(e) => setInput({ ...input, username: e.target.value })}
                    endDecorator={<VerifiedUserRounded />}
                />
                <Divider />
                <CommentInput placeholder='comment...'
                    value={input?.content}
                    onChange={(e) => setInput({ ...input, content: e.target.value })}
                    endDecorator={<Button
                        variant='soft'
                        color='neutral'
                        type='submit'
                    >
                        <SendRounded />
                    </Button>}
                />
            </Stack>
        </form>
    )
}

export default CommentForm