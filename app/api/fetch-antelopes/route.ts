import { NextResponse } from "next/server";

export async function GET() {
  const url =
    "https://work-sample-mk-fs.s3-us-west-2.amazonaws.com/species.json";

  try {
    const response = await fetch(url);
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ error: "Error fetching data" }, { status: 500 });
  }
}
