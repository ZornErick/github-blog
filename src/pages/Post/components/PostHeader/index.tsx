import {InfoTag, PostHeaderContainer, PostHeaderContent, PostHeaderLinks} from "./styles.ts";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {findIconDefinition, IconDefinition, IconLookup} from "@fortawesome/fontawesome-svg-core";
import "../../../../libs/fontAwesome.ts";
import {Link} from "react-router-dom";

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

export function PostHeader() {
    return (
        <PostHeaderContainer>
            <PostHeaderLinks>
                <Link to={"/"}>
                    <FontAwesomeIcon icon={chevronLeftLookupIconDefinition} />
                    <span>VOLTAR</span>
                </Link>
                <Link to={"#"} target={"_blank"}>
                    <span>VER NO GITHUB</span>
                    <FontAwesomeIcon icon={arrowUpRightFromSquareIconDefinition} />
                </Link>
            </PostHeaderLinks>
            <PostHeaderContent>
                <h3>JavaScript data types an data structures</h3>
                <div>
                    <InfoTag>
                        <FontAwesomeIcon icon={githubIconDefinition} />
                        <span>cameronwll</span>
                    </InfoTag>
                    <InfoTag>
                        <FontAwesomeIcon icon={calendarDayDefinition} />
                        <span>Há 1 dia</span>
                    </InfoTag>
                    <InfoTag>
                        <FontAwesomeIcon icon={commentDefinition} />
                        <span>5 comentários</span>
                    </InfoTag>
                </div>
            </PostHeaderContent>
        </PostHeaderContainer>
    );
}
