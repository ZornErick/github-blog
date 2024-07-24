import {SearchFormContainer} from "./styles.ts";

import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

import * as z from "zod";
import {useContextSelector} from "use-context-selector";
import {IssuesContext} from "../../../../contexts/IssuesContext.tsx";

const searchFormSchema = z.object({
    query: z.string()
});

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
    const { fetchIssues, issuesQuantity } = useContextSelector(IssuesContext, (context => ({
        fetchIssues: context.fetchIssues,
        issuesQuantity: context.issuesQuantity
    })));

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    });

    async function handleSearchIssue(data: SearchFormInputs) {
        await fetchIssues(data.query);
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchIssue)}>
            <header>
                <h3>Publicações</h3>
                <span>{issuesQuantity} {`${issuesQuantity > 1 ? 'publicações' : 'publicação'}`}</span>
            </header>
            <input
                type={"text"}
                placeholder={"Buscar conteúdo"}
                {...register("query")}
            />
            <button type={"submit"} disabled={isSubmitting} />
        </SearchFormContainer>
    );
}
