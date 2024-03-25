interface Props {
  params: {
    slug: string[];
  };
}

const Docs = (props: Props) => {
  const { params } = props;
  if (params.slug?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug?.length === 1) {
    return <h1>Viewing docs for feature {params.slug[0]}</h1>;
  }
  return <h1 title="docs home">Docs home page</h1>;
};
export default Docs;
