import SearchResultsItem from "./SearchResultsItem";

export default function Results({ results, isSearching }) {
  return (
    <div style={{ width: "100%", marginTop: 100 }}>
      {!results.length && isSearching && (
        <p style={{ textAlign: "center" }}>No existen resultados</p>
      )}
      {results?.map((value) => (
        <SearchResultsItem key={value.id} {...value} />
      ))}
    </div>
  );
}
