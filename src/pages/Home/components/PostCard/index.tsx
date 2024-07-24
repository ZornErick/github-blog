import {PostCardContainer} from "./styles.ts";

import {formatDistanceToNow} from "date-fns";

import {ptBR} from "date-fns/locale";
import {useNavigate} from "react-router-dom";

interface PostCardProps {
    number: number;
    title: string;
    body: string;
    created_at: string;
}

export function PostCard(props: PostCardProps) {
    const navigate = useNavigate();

    const formattedDate = formatDistanceToNow(new Date(props.created_at), {
        locale: ptBR,
        addSuffix: true
    });

    function goToPost() {
        navigate(`/post/${props.number}`);
    }

    return (
        <PostCardContainer onClick={goToPost}>
            <header>
                <h3>{props.title}</h3>
                <span>{formattedDate}</span>
            </header>
            <p>{props.body}</p>
        </PostCardContainer>
    );
}
