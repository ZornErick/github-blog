import {ReactNode, useCallback, useEffect, useState} from "react";

import {api} from "../libs/axios.ts";

import {createContext} from "use-context-selector";

export interface IIssue {
    html_url: string;
    number: number;
    title: string;
    body: string;
    comments: number;
    created_at: string;
}

interface IUser {
    login: string;
    avatar_url: string;
    html_url: string;
    name: string;
    company: string;
    bio: string;
    followers: number;
}

interface IssuesContextType {
    issues: IIssue[];
    issuesQuantity: number;
    fetchIssues: (searchQuery?: string) => Promise<void>;
    user: IUser;
}

export const IssuesContext = createContext<IssuesContextType>({} as IssuesContextType);

interface IssuesProviderProps {
    children: ReactNode;
}

export function IssuesProvider({ children }: IssuesProviderProps) {
    const [issues, setIssues] = useState<IIssue[]>([]);
    const [issuesQuantity, setIssuesQuantity] = useState(0);
    const [user, setUser] = useState<IUser>({} as IUser);

    const fetchIssues = useCallback(async (searchQuery?: string) => {
        const queryString = `${searchQuery ? searchQuery + ' ' : ''}repo:zornerick/github-blog`;

        const response = await api.get("/search/issues", {
            params: {
                q: queryString
            }
        });

        setIssues(response.data.items);
        setIssuesQuantity(response.data.total_count);
    }, []);

    const fetchUser = useCallback(async () => {
        const response = await api.get("/users/ZornErick");

        setUser(response.data);
    }, [])

    useEffect(() => {
        fetchIssues();
        fetchUser();
    }, [fetchIssues, fetchUser]);

    return (
        <IssuesContext.Provider value={{ issues, issuesQuantity, fetchIssues, user }}>
            {children}
        </IssuesContext.Provider>
    );
}
