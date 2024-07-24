import {InfoTag, PostHeaderContainer, PostHeaderContent, PostHeaderLinks} from "./styles.ts";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {findIconDefinition, IconDefinition, IconLookup} from "@fortawesome/fontawesome-svg-core";
import "../../../../libs/fontAwesome.ts";
import {Link} from "react-router-dom";
import {IIssue} from "../../../../contexts/IssuesContext.tsx";
import {formatDistanceToNow} from "date-fns";
import {ptBR} from "date-fns/locale";

const arrowUpRightFromSquareLookup: IconLookup = { prefix: 'fas', iconName: 'arrow-up-right-from-square' };
const arrowUpRightFromSquareIconDefinition: IconDefinition = findIconDefinition(arrowUpRightFromSquareLookup);

const chevronLeftLookup: IconLookup = { prefix: 'fas', iconName: 'chevron-left' };
const chevronLeftLookupIconDefinition: IconDefinition = findIconDefinition(chevronLeftLookup);

const githubLookup: IconLookup = { prefix: 'fab', iconName: 'github' };
const githubIconDefinition: IconDefinition = findIconDefinition(githubLookup);

const calendarDayLookup: IconLookup = { prefix: 'fas', iconName: 'calendar-day' };
const calendarDayDefinition: IconDefinition = findIconDefinition(calendarDayLookup);

const commentLookup: IconLookup = { prefix: 'fas', iconName: 'comment' };
const commentDefinition: IconDefinition = findIconDefinition(commentLookup);

interface PostHeaderProps {
    userLogin: string;
    issue: IIssue;
}

export function PostHeader({ userLogin, issue }: PostHeaderProps) {
    const formattedDate = formatDistanceToNow(new Date(issue.created_at), {
        locale: ptBR,
        addSuffix: true
    });

    return (
        <PostHeaderContainer>
            <PostHeaderLinks>
                <Link to={"/"}>
                    <FontAwesomeIcon icon={chevronLeftLookupIconDefinition} />
                    <span>VOLTAR</span>
                </Link>
                <Link to={issue.html_url} target={"_blank"}>
                    <span>VER NO GITHUB</span>
                    <FontAwesomeIcon icon={arrowUpRightFromSquareIconDefinition} />
                </Link>
            </PostHeaderLinks>
            <PostHeaderContent>
                <h3>{issue.title}</h3>
                <div>
                    <InfoTag>
                        <FontAwesomeIcon icon={githubIconDefinition} />
                        <span>{userLogin}</span>
                    </InfoTag>
                    <InfoTag>
                        <FontAwesomeIcon icon={calendarDayDefinition} />
                        <span>{formattedDate}</span>
                    </InfoTag>
                    <InfoTag>
                        <FontAwesomeIcon icon={commentDefinition} />
                        <span>{issue.comments} {`${issue.comments > 1 ? 'comentários' : 'comentário'}`}</span>
                    </InfoTag>
                </div>
            </PostHeaderContent>
        </PostHeaderContainer>
    );
}
