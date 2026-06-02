// Components;
import InfoBox from "./InfoBox";

export default function InfoList({ mangaDetail }) {
  return (
    <div className="grid grid-cols-2 gap-5">
      <InfoBox title="Type" value={mangaDetail?.type} />

      <InfoBox title="Status" value={mangaDetail?.status} />

      <InfoBox title="Chapters" value={mangaDetail?.chapters ?? "N/A"} />

      <InfoBox title="Volumes" value={mangaDetail?.volumes ?? "N/A"} />

      <InfoBox title="Published" value={mangaDetail?.published?.string} />

      <InfoBox title="Members" value={mangaDetail?.members} />

      <InfoBox
        title="Authors"
        value={
          mangaDetail?.authors?.length
            ? mangaDetail.authors.map((a) => a.name).join(", ")
            : "N/A"
        }
      />

      <InfoBox
        title="Serialization"
        value={
          mangaDetail?.serializations?.length
            ? mangaDetail.serializations.map((s) => s.name).join(", ")
            : "N/A"
        }
      />
    </div>
  );
}
