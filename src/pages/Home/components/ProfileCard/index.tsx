import {InfoTag, ProfileCardContainer, ProfileContent, ProfileImage} from "./styles.ts";

import {Link} from "react-router-dom";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {findIconDefinition, IconDefinition, IconLookup} from "@fortawesome/fontawesome-svg-core";
import "../../../../libs/fontAwesome.ts";

import {useEffect, useState} from "react";
import {api} from "../../../../libs/axios.ts";

const arrowUpRightFromSquareLookup: IconLookup = { prefix: 'fas', iconName: 'arrow-up-right-from-square' };
const arrowUpRightFromSquareIconDefinition: IconDefinition = findIconDefinition(arrowUpRightFromSquareLookup);

const githubLookup: IconLookup = { prefix: 'fab', iconName: 'github' };
const githubIconDefinition: IconDefinition = findIconDefinition(githubLookup);

const buildingLookup: IconLookup = { prefix: 'fas', iconName: 'building' };
const buildingIconDefinition: IconDefinition = findIconDefinition(buildingLookup);

const userGroupLookup: IconLookup = { prefix: 'fas', iconName: 'user-group' };
const userGroupIconDefinition: IconDefinition = findIconDefinition(userGroupLookup);

interface IUser {
    login: string;
    avatar_url: string;
    html_url: string;
    name: string;
    company: string;
    bio: string;
    followers: number;
}

export function ProfileCard() {
    const [user, setUser] = useState<IUser>();

    useEffect(() => {
        api.get("/users/ZornErick").then((response) => {
            setUser({
                login: response.data.login,
                avatar_url: response.data.avatar_url,
                html_url: response.data.html_url,
                name: response.data.name,
                company: response.data.company,
                bio: response.data.bio,
                followers: response.data.followers
            });
        })
    }, [])

    return (
        <ProfileCardContainer>
            <ProfileImage>
                <img src={user?.avatar_url} alt={""} />
            </ProfileImage>
            <ProfileContent>
                <header>
                    <h3>{user?.name ? user.name : "Undefined"}</h3>
                    <Link to={user?.html_url ? user?.html_url : "https://github.com"} target={"_blank"}>
                        <span>GITHUB</span>
                        <FontAwesomeIcon icon={arrowUpRightFromSquareIconDefinition} />
                    </Link>
                </header>
                <p>{user?.bio}</p>
                <div>
                    <InfoTag>
                        <FontAwesomeIcon icon={githubIconDefinition} />
                        <span>{user?.login ? user.login : "Undefined"}</span>
                    </InfoTag>
                    <InfoTag>
                        <FontAwesomeIcon icon={buildingIconDefinition}/>
                        <span>{user?.company ? user.company : "No company"}</span>
                    </InfoTag>
                    <InfoTag>
                        <FontAwesomeIcon icon={userGroupIconDefinition}/>
                        <span>{user?.followers ? user.followers : "0"} seguidores</span>
                    </InfoTag>
                </div>
            </ProfileContent>
        </ProfileCardContainer>
    );
}
