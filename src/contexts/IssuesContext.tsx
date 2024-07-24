import {ReactNode, useCallback, useEffect, useState} from "react";

import {api} from "../libs/axios.ts";

import {createContext} from "use-context-selector";

interface IIssue {
    number: number;
    title: string;
    body: string;
    created_at: string;
}

interface IssuesContextType {
    issues: IIssue[];
    issuesQuantity: number;
    fetchIssues: (searchQuery?: string) => Promise<void>;
}

export const IssuesContext = createContext<IssuesContextType>({} as IssuesContextType);

interface IssuesProviderProps {
    children: ReactNode;
}

export function IssuesProvider({ children }: IssuesProviderProps) {
    const [issues, setIssues] = useState<IIssue[]>([]);
    const [issuesQuantity, setIssuesQuantity] = useState(0);

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

    useEffect(() => {
        fetchIssues();
    }, [fetchIssues]);

    return (
        <IssuesContext.Provider value={{ issues, issuesQuantity, fetchIssues }}>
            {children}
        </IssuesContext.Provider>
    );
}
