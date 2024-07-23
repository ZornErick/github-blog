import {InfoTag, ProfileCardContainer, ProfileContent, ProfileImage} from "./styles.ts";

import {Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {findIconDefinition, IconDefinition, IconLookup} from "@fortawesome/fontawesome-svg-core";
import "../../../../libs/fontAwesome.ts";

import profileImage from "../../../../assets/profileImage.svg";

const arrowUpRightFromSquareLookup: IconLookup = { prefix: 'fas', iconName: 'arrow-up-right-from-square' };
const arrowUpRightFromSquareIconDefinition: IconDefinition = findIconDefinition(arrowUpRightFromSquareLookup);

const githubLookup: IconLookup = { prefix: 'fab', iconName: 'github' };
const githubIconDefinition: IconDefinition = findIconDefinition(githubLookup);

const buildingLookup: IconLookup = { prefix: 'fas', iconName: 'building' };
const buildingIconDefinition: IconDefinition = findIconDefinition(buildingLookup);

const userGroupLookup: IconLookup = { prefix: 'fas', iconName: 'user-group' };
const userGroupIconDefinition: IconDefinition = findIconDefinition(userGroupLookup);

export function ProfileCard() {
    return (
        <ProfileCardContainer>
            <ProfileImage>
                <img src={profileImage} alt={""} />
            </ProfileImage>
            <ProfileContent>
                <header>
                    <h3>Cameron Williamson</h3>
                    <Link to={"https://github.com"} target={"_blank"}>
                        <span>GITHUB</span>
                        <FontAwesomeIcon icon={arrowUpRightFromSquareIconDefinition} />
                    </Link>
                </header>
                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
                <div>
                    <InfoTag>
                        <FontAwesomeIcon icon={githubIconDefinition} />
                        <span>cameronwll</span>
                    </InfoTag>
                    <InfoTag>
                        <FontAwesomeIcon icon={buildingIconDefinition}/>
                        <span>Rocketseat</span>
                    </InfoTag>
                    <InfoTag>
                        <FontAwesomeIcon icon={userGroupIconDefinition}/>
                        <span>32 seguidores</span>
                    </InfoTag>
                </div>
            </ProfileContent>
        </ProfileCardContainer>
    );
}
