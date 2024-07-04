import {SearchFormContainer} from "./styles.ts";

export function SearchForm() {
    return (
        <SearchFormContainer>
            <header>
                <h3>Publicações</h3>
                <span>6 publicações</span>
            </header>
            <input
                type={"text"}
                placeholder={"Buscar conteúdo"}
            />
            <button type={"submit"} />
        </SearchFormContainer>
    );
}
