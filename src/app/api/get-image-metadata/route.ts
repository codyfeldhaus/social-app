const getImageMetadata = async (url: string) => {
  const imageSource = await fetch(
    url.replace(
      process.env.NEXT_PUBLIC_CLIENT_TUS_URL,
      process.env.NEXT_PUBLIC_SERVER_TUS_URL,
    ),
  );
  const imageArrayBuffer = await imageSource.arrayBuffer();

  const height = 0;
  const width = 0;
  const blurDataUrl = "data:";

  return {
    width,
    height,
    blurDataUrl,
  };
};

const POST = async (request: Request) => {
  const body = await request.json();
  const { url } = body;

  const metadata = await getImageMetadata(url);

  return Response.json(metadata);
};

export { POST };
