import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";
import {
  ChevronRight,
  Folder,
  FolderOpen,
  Image,
  Music2,
  FileText,
  Lock,
  Play,
  Pause,
  Download,
  Search,
  ArrowLeft,
  ArrowRight,
  RotateCw,
  KeyRound,
  Minus,
  Square,
  X,
  Video,
  Upload,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Imram's World / You're early" },
      {
        name: "description",
        content:
          "Unreleased tracks, demos, and voice memos — filed away for the inner circle.",
      },
      { property: "og:title", content: "Imram's World / You're early" },
      {
        property: "og:description",
        content: "A private file cabinet of unreleased tracks.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VaultPage,
});

type VaultFolder = { id: string; name: string; count: number; parent?: string };
type VaultItem = {
  id: string;
  title: string;
  folder: string;
  kind: string;
  size: string;
  length: string;
  modified: string;
  locked: boolean;
  media: "audio" | "video" | "text" | "image";
  src?: string;
  text?: string;
};

const FOLDERS: VaultFolder[] = [
  { id: "drops", name: "Drops", count: 11, parent: undefined },
  { id: "2017", name: "2017", count: 1, parent: "drops" },
  { id: "2018", name: "2018", count: 9, parent: "drops" },
  { id: "2020", name: "2020", count: 4, parent: "drops" },
  { id: "demos", name: "Demos", count: 8 },
  { id: "live", name: "Live", count: 1 },
  { id: "memos", name: "Voice memos", count: 4 },
  { id: "locations", name: "Locations", count: 1 },
  { id: "wolverhampton", name: "Wolverhampton", count: 8, parent: "locations" },
  { id: "home", name: "Home", count: 0, parent: "wolverhampton" },
  { id: "first-studio", name: "First Studio", count: 0, parent: "wolverhampton" },
  { id: "city-centre", name: "City Centre", count: 0, parent: "wolverhampton" },
  { id: "ring-road", name: "Ring Road", count: 0, parent: "wolverhampton" },
  { id: "train-station", name: "Train Station", count: 0, parent: "wolverhampton" },
  { id: "bus-station", name: "Bus Station", count: 0, parent: "wolverhampton" },
  { id: "west-park", name: "West Park", count: 0, parent: "wolverhampton" },
  { id: "canal", name: "Canal", count: 0, parent: "wolverhampton" },
  { id: "ideas", name: "Ideas", count: 4 },
  { id: "colour-palette", name: "Colour Palette", count: 0, parent: "ideas" },
  { id: "photography", name: "Photography", count: 0, parent: "ideas" },
  { id: "books", name: "Books", count: 0, parent: "ideas" },
  { id: "album-concepts", name: "Album Concepts", count: 0, parent: "ideas" },
  { id: "sessions", name: "Sessions", count: 5 },
  { id: "studio-001", name: "Studio_001", count: 0, parent: "sessions" },
  { id: "studio-002", name: "Studio_002", count: 0, parent: "sessions" },
  { id: "mixes", name: "Mixes", count: 0, parent: "sessions" },
  { id: "photos", name: "Photos", count: 0, parent: "sessions" },
  { id: "session-videos", name: "Videos", count: 0, parent: "sessions" },
  { id: "journals", name: "Journals", count: 2 },
  { id: "archive", name: "Archive", count: 12 },
  { id: "videos", name: "Videos", count: 2, parent: "archive" },
];

const TRACKS: VaultItem[] = [
  { id: "01", title: "midnight-reverb.wav", folder: "drops", kind: "Single", size: "38.2 MB", length: "3:42", modified: "2h ago", locked: false, media: "audio" },
  { id: "03", title: "slow-bleed_rework.wav", folder: "drops", kind: "Alt mix", size: "41.0 MB", length: "4:15", modified: "3d ago", locked: false, media: "audio" },
  { id: "04", title: "paper-cathedrals_live.wav", folder: "live", kind: "Live", size: "52.7 MB", length: "5:03", modified: "Fri", locked: true, media: "audio" },
  { id: "05", title: "untitled-III.m4a", folder: "memos", kind: "Voice memo", size: "8.4 MB", length: "1:47", modified: "Sun", locked: true, media: "audio" },
  { id: "06", title: "feral-season_b-side.wav", folder: "drops", kind: "B-side", size: "35.1 MB", length: "3:29", modified: "May 12", locked: true, media: "audio" },
  {
    id: "j01",
    title: "2026-07-04.txt",
    folder: "journals",
    kind: "Text file",
    size: "2.1 KB",
    length: "—",
    modified: "Jul 4",
    locked: false,
    media: "text",
    text: "2026-07-04\n\nNew folder structure for the vault. Keep locations, sessions, ideas, and journals separate so the archive feels easy to explore.",
  },
  {
    id: "j02",
    title: "2026-06-28.txt",
    folder: "journals",
    kind: "Text file",
    size: "1.7 KB",
    length: "—",
    modified: "Jun 28",
    locked: false,
    media: "text",
    text: "2026-06-28\n\nCollect references for the next phase: rooms, routes, studio photos, book notes, and early album concepts.",
  },
  {
    id: "v01",
    title: "Studio session",
    folder: "videos",
    kind: "Clip",
    size: "18.4 MB",
    length: "0:32",
    modified: "Apr 2",
    locked: false,
    media: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  },
  {
    id: "v02",
    title: "Tour diary · ep. 01",
    folder: "videos",
    kind: "Diary",
    size: "64.1 MB",
    length: "2:14",
    modified: "Mar 18",
    locked: false,
    media: "video",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  },
  // Placeholder demo wired to public/uploads (playback uses external URL)
  {
    id: "u-i-w-1",
    title: "I wanna know.mp3",
    folder: "demos",
    kind: "Demo",
    size: "3.2 MB",
    length: "3:12",
    modified: "just now",
    locked: false,
    media: "audio",
    src: "/uploads/I%20wanna%20know.mp3",
  },
  {
    id: "u-bout-time",
    title: "Bout Time.wav",
    folder: "demos",
    kind: "Demo",
    size: "4.1 MB",
    length: "3:24",
    modified: "just now",
    locked: false,
    media: "audio",
    src: "/uploads/Bout%20Time.wav",
  },
  {
    id: "u-heart-went-cold",
    title: "Heart went cold.wav",
    folder: "demos",
    kind: "Demo",
    size: "4.5 MB",
    length: "3:31",
    modified: "just now",
    locked: false,
    media: "audio",
    src: "/uploads/Heart%20went%20cold.wav",
  },
  {
    id: "u-long-way-home",
    title: "Long way home.wav",
    folder: "demos",
    kind: "Demo",
    size: "5.0 MB",
    length: "3:58",
    modified: "just now",
    locked: false,
    media: "audio",
    src: "/uploads/Long%20way%20home.wav",
  },
  {
    id: "u-closer-to-the-truth",
    title: "Closer to the truth .wav",
    folder: "demos",
    kind: "Demo",
    size: "4.3 MB",
    length: "3:45",
    modified: "just now",
    locked: false,
    media: "audio",
    src: "/uploads/Closer%20to%20the%20truth%20.wav",
  },
  {
    id: "u-piece-of-your-love",
    title: "Piece of your love .mp3",
    folder: "demos",
    kind: "Demo",
    size: "3.8 MB",
    length: "3:12",
    modified: "just now",
    locked: false,
    media: "audio",
    src: "/uploads/Piece%20of%20your%20love%20.mp3",
  },
  {
    id: "u-tell-me-how-v2",
    title: "tell me how v2.mp3",
    folder: "demos",
    kind: "Demo",
    size: "3.5 MB",
    length: "3:08",
    modified: "just now",
    locked: false,
    media: "audio",
    src: "/uploads/tell%20me%20how%20v2.mp3",
  },
  {
    id: "u-back-at-me",
    title: "back at me .mp3",
    folder: "demos",
    kind: "Demo",
    size: "3.6 MB",
    length: "3:25",
    modified: "just now",
    locked: false,
    media: "audio",
    src: "/uploads/back%20at%20me%20.mp3",
  },
  {
    id: "u-heartbeat-racing",
    title: "Heartbeat racing.mp3",
    folder: "demos",
    kind: "Demo",
    size: "3.9 MB",
    length: "3:31",
    modified: "just now",
    locked: false,
    media: "audio",
    src: "/uploads/Heartbeat%20racing.mp3",
  },
  {
    id: "2017-img-1",
    title: "Screenshot 2026-07-04 at 9.42.46 PM.png",
    folder: "2017",
    kind: "Photo",
    size: "405.2 KB",
    length: "—",
    modified: "2017",
    locked: false,
    media: "image",
    src: "/2017/Screenshot%202026-07-04%20at%209.42.46%E2%80%AFPM.png",
  },
  {
    id: "2018-img-1",
    title: "Footasylum Performance 2.png",
    folder: "2018",
    kind: "Photo",
    size: "—",
    length: "—",
    modified: "2018",
    locked: false,
    media: "image",
    src: "/2018/Footasylum%20Performance%202.png",
  },
  {
    id: "2018-img-2",
    title: "Footasylum Performance.png",
    folder: "2018",
    kind: "Photo",
    size: "—",
    length: "—",
    modified: "2018",
    locked: false,
    media: "image",
    src: "/2018/Footasylum%20Performance.png",
  },
  {
    id: "2018-img-3",
    title: "IMG_1217.PNG",
    folder: "2018",
    kind: "Photo",
    size: "633.8 KB",
    length: "—",
    modified: "2018",
    locked: false,
    media: "image",
    src: "/2018/IMG_1217.PNG",
  },
  {
    id: "2018-img-4",
    title: "Rhearsal.png",
    folder: "2018",
    kind: "Photo",
    size: "—",
    length: "—",
    modified: "2018",
    locked: false,
    media: "image",
    src: "/2018/Rhearsal.png",
  },
  {
    id: "2018-img-5",
    title: "Screenshot 2026-07-04 at 9.41.08 PM.png",
    folder: "2018",
    kind: "Photo",
    size: "—",
    length: "—",
    modified: "2018",
    locked: false,
    media: "image",
    src: "/2018/Screenshot%202026-07-04%20at%209.41.08%E2%80%AFPM.png",
  },
  {
    id: "2018-img-6",
    title: "Screenshot 2026-07-04 at 9.41.48 PM.png",
    folder: "2018",
    kind: "Photo",
    size: "—",
    length: "—",
    modified: "2018",
    locked: false,
    media: "image",
    src: "/2018/Screenshot%202026-07-04%20at%209.41.48%E2%80%AFPM.png",
  },
  {
    id: "2018-img-7",
    title: "Screenshot 2026-07-04 at 9.42.31 PM.png",
    folder: "2018",
    kind: "Photo",
    size: "—",
    length: "—",
    modified: "2018",
    locked: false,
    media: "image",
    src: "/2018/Screenshot%202026-07-04%20at%209.42.31%E2%80%AFPM.png",
  },
  {
    id: "2018-img-8",
    title: "rocket kid tracklist.png",
    folder: "2018",
    kind: "Photo",
    size: "—",
    length: "—",
    modified: "2018",
    locked: false,
    media: "image",
    src: "/2018/rocket%20kid%20tracklist.png",
  },
  {
    id: "2018-img-9",
    title: "rocket kid.jpg",
    folder: "2018",
    kind: "Photo",
    size: "—",
    length: "—",
    modified: "2018",
    locked: false,
    media: "image",
    src: "/2018/rocket%20kid.jpg",
  },
  {
    id: "2020-img-1",
    title: "Screenshot 2026-07-04 at 9.45.20 PM.png",
    folder: "2020",
    kind: "Photo",
    size: "1.8 MB",
    length: "—",
    modified: "2020",
    locked: false,
    media: "image",
    src: "/2020/Screenshot%202026-07-04%20at%209.45.20%E2%80%AFPM.png",
  },
  {
    id: "2020-img-2",
    title: "Screenshot 2026-07-04 at 10.33.27 PM.png",
    folder: "2020",
    kind: "Photo",
    size: "2.7 MB",
    length: "—",
    modified: "2020",
    locked: false,
    media: "image",
    src: "/2020/Screenshot%202026-07-04%20at%2010.33.27%E2%80%AFPM.png",
  },
  {
    id: "2020-img-3",
    title: "Screenshot 2026-07-04 at 10.36.22 PM.png",
    folder: "2020",
    kind: "Photo",
    size: "—",
    length: "—",
    modified: "2020",
    locked: false,
    media: "image",
    src: "/2020/Screenshot%202026-07-04%20at%2010.36.22%E2%80%AFPM.png",
  },
  {
    id: "2020-img-4",
    title: "Screenshot 2026-07-04 at 11.00.50 PM.png",
    folder: "2020",
    kind: "Photo",
    size: "—",
    length: "—",
    modified: "2020",
    locked: false,
    media: "image",
    src: "/2020/Screenshot%202026-07-04%20at%2011.00.50%E2%80%AFPM.png",
  },
];

function formatFileSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function displayVideoTitle(item: VaultItem) {
  return item.title
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function folderPath(folderId: string) {
  const parts: string[] = [];
  let current = FOLDERS.find((f) => f.id === folderId);
  while (current) {
    parts.unshift(current.name);
    current = current.parent ? FOLDERS.find((f) => f.id === current!.parent) : undefined;
  }
  return parts;
}

function VideoThumbnailCard({
  item,
  isSelected,
  isActive,
  onOpen,
}: {
  item: VaultItem;
  isSelected: boolean;
  isActive: boolean;
  onOpen: (item: VaultItem) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(item)}
      className={`group relative aspect-video overflow-hidden rounded-sm border bg-muted/40 text-left transition ${
        isSelected || isActive
          ? "border-accent ring-2 ring-accent/25"
          : "border-border hover:border-foreground/25 hover:shadow-md"
      }`}
    >
      {item.src && !item.locked && (
        <video
          src={item.src}
          preload="metadata"
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          onLoadedMetadata={(e) => {
            e.currentTarget.currentTime = Math.min(1, e.currentTarget.duration * 0.05);
          }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/5" />

      <div className="absolute inset-0 grid place-items-center">
        {item.locked ? (
          <span className="grid place-items-center h-12 w-12 rounded-full bg-black/50 text-white backdrop-blur-sm">
            <Lock className="h-5 w-5" strokeWidth={1.75} />
          </span>
        ) : (
          <span className="grid place-items-center h-12 w-12 rounded-full bg-white/95 text-foreground shadow-lg transition group-hover:scale-105">
            <Play className="h-5 w-5 fill-current ml-0.5" />
          </span>
        )}
      </div>

      <span className="absolute top-2 right-2 rounded-sm bg-black/55 px-1.5 py-0.5 text-[10px] text-white text-mono tabular-nums">
        {item.locked ? "locked" : item.length}
      </span>

      <div className="absolute inset-x-0 bottom-0 p-3">
        <p className="truncate text-sm font-medium text-white">{displayVideoTitle(item)}</p>
        <p className="mt-0.5 text-[11px] text-white/70">{item.kind}</p>
      </div>
    </button>
  );
}

function VaultPage() {
  const [folder, setFolder] = useState<string>("drops");
  const [selected, setSelected] = useState<string | null>("01");
  const [playing, setPlaying] = useState<string | null>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [loadedVideos, setLoadedVideos] = useState<VaultItem[]>([]);
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const currentFolder = FOLDERS.find((f) => f.id === folder)!;
  const allItems = [...TRACKS, ...loadedVideos];
  const visible = allItems.filter((t) => t.folder === folder);
  const imageItems = visible.filter((t) => t.media === "image");
  const fileItems = visible.filter((t) => t.media !== "image");
  const path = folderPath(folder);
  const isLargeImageFolder = false;
  const parentFolder = currentFolder.parent
    ? FOLDERS.find((f) => f.id === currentFolder.parent)
    : undefined;
  const selectedItem = selected ? allItems.find((t) => t.id === selected) : undefined;
  const activeVideoItem = activeVideo ? allItems.find((t) => t.id === activeVideo) : undefined;
  const isVideosFolder = folder === "videos";

  const openFolder = (id: string) => {
    setFolder(id);
    setSelected(null);
    setPlaying(null);
    setActiveVideo(null);
  };

  const openVideo = (item: VaultItem) => {
    if (item.locked) return;
    setSelected(item.id);
    setActiveVideo(item.id);
    setPlaying(null);
  };

  const togglePlay = (item: VaultItem) => {
    if (item.locked) return;
    setSelected(item.id);
    if (item.media === "video") {
      openVideo(item);
      return;
    }
    if (item.media === "text") {
      setActiveVideo(null);
      setPlaying(null);
      return;
    }
    setActiveVideo(null);
    setPlaying((cur) => (cur === item.id ? null : item.id));
  };

  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    if (playing) {
      const it = allItems.find((i) => i.id === playing);
      if (it && it.src) {
        if (audioEl.src !== it.src) audioEl.src = it.src;
        audioEl.play().catch(() => {});
      }
    } else {
      audioEl.pause();
      try {
        audioEl.currentTime = 0;
      } catch (e) {}
    }

    audioEl.onended = () => setPlaying(null);
  }, [playing, allItems]);

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const id = `upload-${Date.now()}`;
    const item: VaultItem = {
      id,
      title: file.name,
      folder: "videos",
      kind: "Upload",
      size: formatFileSize(file.size),
      length: "—:—",
      modified: "just now",
      locked: false,
      media: "video",
      src: URL.createObjectURL(file),
    };

    setLoadedVideos((prev) => [...prev, item]);
    setFolder("videos");
    setSelected(id);
    setActiveVideo(id);
    setPlaying(null);
    e.target.value = "";
  };

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes("@")) setJoined(true);
  };

  const renderItemIcon = (item: VaultItem) => {
    if (item.locked) return <Lock className="h-3.5 w-3.5" strokeWidth={1.75} />;
    if (item.media === "video") return <Video className="h-3.5 w-3.5" strokeWidth={1.75} />;
    if (item.media === "image") return <Image className="h-3.5 w-3.5" strokeWidth={1.75} />;
    if (item.media === "text") return <FileText className="h-3.5 w-3.5" strokeWidth={1.75} />;
    return <Music2 className="h-3.5 w-3.5" strokeWidth={1.75} />;
  };

  const renderFolderTree = (parentId?: string, depth = 0) =>
    FOLDERS.filter((f) => f.parent === parentId).map((f) => {
      const active = f.id === folder;
      const count = f.id === "videos" ? f.count + loadedVideos.length : f.count;
      return (
        <div key={f.id}>
          <button
            onClick={() => openFolder(f.id)}
            className={`w-full flex items-center gap-2 py-1.5 pr-3 text-sm text-left transition ${
              active
                ? "bg-selected text-selected-foreground"
                : "hover:bg-row-hover text-foreground/80"
            }`}
            style={{ paddingLeft: `${12 + depth * 16}px` }}
          >
            {active ? (
              <FolderOpen className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
            ) : (
              <Folder className="h-3.5 w-3.5 shrink-0" strokeWidth={1.75} />
            )}
            <span className="truncate">{f.name}</span>
            <span className="ml-auto text-[10px] text-muted-foreground text-mono">{count}</span>
          </button>
          {renderFolderTree(f.id, depth + 1)}
        </div>
      );
    });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 py-10 sm:py-16">
        {/* Wordmark */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <KeyRound className="h-4 w-4" strokeWidth={1.5} />
            <span className="font-medium tracking-tight">Imram's World</span>
            <span className="text-muted-foreground">/ You're early</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="#join"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
            >
              Request access
            </a>
          </div>
        </div>

        {/* Explorer Window */}
        <section className="surface-window overflow-hidden">
          {/* Title bar */}
          <div className="surface-chrome flex items-center justify-between px-3 py-2">
            <div className="flex items-center gap-2 text-[11px] text-muted-foreground text-mono">
              <FolderOpen className="h-3.5 w-3.5" strokeWidth={1.75} />
              vault:\\{path.map((part) => part.toLowerCase()).join("\\")}
            </div>
            <div className="flex items-center gap-1.5">
              <button aria-label="minimize" className="grid place-items-center h-5 w-5 rounded-sm hover:bg-muted transition text-muted-foreground">
                <Minus className="h-3 w-3" />
              </button>
              <button aria-label="maximize" className="grid place-items-center h-5 w-5 rounded-sm hover:bg-muted transition text-muted-foreground">
                <Square className="h-2.5 w-2.5" />
              </button>
              <button aria-label="close" className="grid place-items-center h-5 w-5 rounded-sm hover:bg-destructive hover:text-destructive-foreground transition text-muted-foreground">
                <X className="h-3 w-3" />
              </button>
            </div>
          </div>

          {/* Toolbar / address bar */}
          <div className="surface-chrome flex items-center gap-2 px-3 py-2">
            <div className="flex items-center gap-0.5 text-muted-foreground">
              <button
                className="p-1 rounded-sm hover:bg-muted hover:text-foreground disabled:opacity-40"
                disabled={!parentFolder}
                aria-label="back"
                onClick={() => parentFolder && openFolder(parentFolder.id)}
              >
                <ArrowLeft className="h-3.5 w-3.5" />
              </button>
              <button className="p-1 rounded-sm hover:bg-muted hover:text-foreground disabled:opacity-40" disabled aria-label="forward">
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
              <button className="p-1 rounded-sm hover:bg-muted hover:text-foreground" aria-label="refresh">
                <RotateCw className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Breadcrumb address */}
            <div className="flex-1 flex items-center gap-1 text-xs text-mono bg-card border border-border rounded-sm px-2 py-1 min-w-0">
              <span className="text-muted-foreground shrink-0">Vault</span>
              {path.map((part) => (
                <span key={part} className="flex items-center gap-1 min-w-0">
                  <ChevronRight className="h-3 w-3 text-muted-foreground shrink-0" />
                  <span className="truncate">{part}</span>
                </span>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-1.5 text-xs text-mono bg-card border border-border rounded-sm px-2 py-1 w-48">
              <Search className="h-3 w-3 text-muted-foreground" />
              <span className="text-muted-foreground">Search {currentFolder.name.toLowerCase()}</span>
            </div>
          </div>

          {/* Body: sidebar + list */}
          <div className="grid grid-cols-[140px_1fr] sm:grid-cols-[180px_1fr]">
            {/* Sidebar */}
            <aside className="border-r border-border bg-chrome/40 py-2">
              <div className="px-3 pt-1 pb-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Folders
              </div>
              <nav>{renderFolderTree()}</nav>
            </aside>

            {/* File list / video gallery */}
            <div className="min-w-0">
              {isVideosFolder ? (
                <div className="min-w-0">
                  {activeVideoItem?.src && (
                    <div className="border-b border-border bg-card">
                      <video
                        key={activeVideoItem.src}
                        src={activeVideoItem.src}
                        controls
                        autoPlay
                        playsInline
                        className="aspect-video w-full bg-foreground/5 object-contain"
                      />
                      <div className="flex items-center justify-between gap-3 px-4 py-3">
                        <div className="min-w-0">
                          <p className="truncate text-sm font-medium">
                            {displayVideoTitle(activeVideoItem)}
                          </p>
                          <p className="text-[11px] text-muted-foreground text-mono">
                            {activeVideoItem.kind} · {activeVideoItem.length}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setActiveVideo(null)}
                          className="shrink-0 text-[11px] text-muted-foreground hover:text-foreground transition underline underline-offset-4"
                        >
                          close
                        </button>
                      </div>
                    </div>
                  )}

                  <div className="p-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {visible.map((item) => (
                        <VideoThumbnailCard
                          key={item.id}
                          item={item}
                          isSelected={selected === item.id}
                          isActive={activeVideo === item.id}
                          onOpen={openVideo}
                        />
                      ))}

                      <button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        className="group relative flex aspect-video flex-col items-center justify-center gap-2 rounded-sm border border-dashed border-border bg-chrome/30 text-muted-foreground transition hover:border-foreground/30 hover:bg-row-hover hover:text-foreground"
                      >
                        <span className="grid place-items-center h-10 w-10 rounded-full border border-border bg-card transition group-hover:border-foreground/30">
                          <Upload className="h-4 w-4" strokeWidth={1.75} />
                        </span>
                        <span className="text-sm">Add video</span>
                      </button>
                    </div>

                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="video/*"
                      className="hidden"
                      onChange={handleVideoUpload}
                    />
                    

                    {visible.length === 0 && (
                      <p className="mt-6 text-center text-sm text-muted-foreground">
                        No videos yet. Add one to get started.
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  {imageItems.length > 0 && (
                    <div className="p-4">
                      <div className="mb-3 flex items-center justify-between gap-3">
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                            photo previews
                          </div>
                          <h2 className="text-sm font-medium text-foreground">{currentFolder.name}</h2>
                        </div>
                        <span className="text-xs text-muted-foreground">{imageItems.length} photo{imageItems.length === 1 ? "" : "s"}</span>
                      </div>
                      <div className={`grid gap-3 ${isLargeImageFolder ? "grid-cols-1" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
                        {imageItems.map((item) => (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => setSelected(item.id)}
                            className={`group overflow-hidden rounded-sm border border-border bg-card text-left transition hover:shadow-lg ${
                              isLargeImageFolder ? "md:col-span-2" : ""
                            }`}
                          >
                            <div className={`relative overflow-hidden bg-slate-950/5 ${isLargeImageFolder ? "h-[38rem]" : "h-48"}`}>
                              <img
                                src={item.src}
                                alt={item.title}
                                className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                              />
                            </div>
                            <div className="space-y-1 p-3">
                              <div className="text-[11px] text-muted-foreground">
                                {item.kind}
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Column headers */}
                  <div className="hidden md:grid grid-cols-[1fr_90px_70px_80px] gap-4 px-4 py-2 border-b border-border text-[10px] uppercase tracking-[0.18em] text-muted-foreground bg-chrome/50">
                    <div>Name</div>
                    <div>Type</div>
                    <div className="text-right">Length</div>
                    <div className="text-right">Modified</div>
                  </div>

                  <ul className="divide-y divide-border">
                    {fileItems.map((t) => {
                      const isSelected = selected === t.id;
                      const isPlaying = playing === t.id;
                      return (
                        <li key={t.id}>
                          <button
                            onClick={() => setSelected(t.id)}
                            onDoubleClick={() => togglePlay(t)}
                            className={`w-full grid grid-cols-[24px_1fr_auto] md:grid-cols-[24px_1fr_90px_70px_80px] gap-3 md:gap-4 items-center px-4 py-2.5 text-left transition ${
                              isSelected ? "bg-selected" : "hover:bg-row-hover"
                            } ${t.locked ? "text-muted-foreground" : ""}`}
                          >
                            <span className="grid place-items-center">
                              {renderItemIcon(t)}
                            </span>

                            <span className="min-w-0 flex items-center gap-2">
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  if (t.locked) return;
                                  togglePlay(t);
                                }}
                                aria-label={isPlaying ? "pause" : "play"}
                                className={`grid place-items-center h-7 w-7 rounded-sm ${
                                  t.locked
                                    ? "border-border text-muted-foreground"
                                    : "border-border hover:bg-foreground hover:text-background transition"
                                }`}
                              >
                                {isPlaying ? (
                                  <Pause className="h-3 w-3 fill-current" />
                                ) : (
                                  <Play className="h-3 w-3 fill-current ml-px" />
                                )}
                              </button>

                              <span className="text-mono text-sm truncate">{t.title}</span>

                              {t.folder === "demos" && t.media === "audio" && t.src && (
                                <a
                                  href={t.src}
                                  download
                                  className="inline-flex h-7 w-7 items-center justify-center rounded-sm border border-border text-muted-foreground hover:bg-foreground hover:text-background transition"
                                  aria-label={`Download ${t.title}`}
                                >
                                  <Download className="h-3 w-3" />
                                </a>
                              )}

                              {isPlaying && (
                                <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.15em] text-accent">
                                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                                  playing
                                </span>
                              )}
                            </span>

                            <span className="hidden md:block text-xs text-muted-foreground truncate">
                              {t.kind}
                            </span>
                            <span className="text-mono text-xs text-muted-foreground text-right tabular-nums">
                              {t.locked ? "—:—" : t.length}
                            </span>
                            <span className="hidden md:block text-xs text-muted-foreground text-right truncate">
                              {t.modified}
                            </span>

                            {/* Mobile play button */}
                            <span
                              role="button"
                              tabIndex={0}
                              onClick={(e) => {
                                e.stopPropagation();
                                togglePlay(t);
                              }}
                              className={`md:hidden justify-self-end grid place-items-center h-7 w-7 rounded-sm border ${
                                t.locked
                                  ? "border-border text-muted-foreground"
                                  : "border-border hover:bg-foreground hover:text-background transition"
                              }`}
                              aria-label={t.locked ? "locked" : isPlaying ? "pause" : "play"}
                            >
                              {t.locked ? (
                                <Lock className="h-3 w-3" strokeWidth={1.75} />
                              ) : isPlaying ? (
                                <Pause className="h-3 w-3 fill-current" />
                              ) : (
                                <Play className="h-3 w-3 fill-current ml-px" />
                              )}
                            </span>
                          </button>
                        </li>
                      );
                    })}

                    {visible.length === 0 && (
                      <li className="px-4 py-16 text-center text-sm text-muted-foreground">
                        This folder is empty.
                      </li>
                    )}
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* Status bar */}
          <div className="surface-chrome border-t border-b-0 flex items-center justify-between px-3 py-1.5 text-[11px] text-muted-foreground text-mono">
            <span>
              {visible.length} item{visible.length === 1 ? "" : "s"}
              {selected ? ` · 1 selected` : ""}
            </span>
            <span className="hidden sm:inline">
              {visible.filter((t) => t.locked).length} locked ·{" "}
              {isVideosFolder ? "click a video to open" : "double-click to play"}
            </span>
          </div>
        </section>

        {/* Properties strip — selected file details */}
        <section className="mt-4 grid sm:grid-cols-[1fr_auto] gap-3 items-center surface-window px-4 py-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="grid place-items-center h-9 w-9 rounded-sm bg-muted shrink-0">
              {selectedItem?.locked ? (
                <Lock className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />
              ) : selectedItem?.media === "video" ? (
                <Video className="h-4 w-4" strokeWidth={1.75} />
              ) : selectedItem?.media === "text" ? (
                <FileText className="h-4 w-4" strokeWidth={1.75} />
              ) : (
                <Music2 className="h-4 w-4" strokeWidth={1.75} />
              )}
            </div>
            <div className="min-w-0">
              <div className="text-mono text-sm truncate">
                {selectedItem
                  ? selectedItem.media === "video"
                    ? displayVideoTitle(selectedItem)
                    : selectedItem.title
                  : "no file selected"}
              </div>
              <div className="text-[11px] text-muted-foreground text-mono">
                {selectedItem
                  ? `${selectedItem.kind} · ${selectedItem.size}`
                  : "select a track above"}
              </div>
            </div>
          </div>
          <div className="text-[11px] text-muted-foreground text-mono sm:text-right">
            properties
          </div>
        </section>

        {/* Hidden audio element controlled by `playing` state */}
        <audio ref={(el) => (audioRef.current = el)} style={{ display: "none" }} />

        {selectedItem?.media === "text" && (
          <section className="mt-4 surface-window p-4">
            <div className="mb-3 flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  text.preview
                </div>
                <h2 className="mt-1 truncate text-sm font-medium text-mono">
                  {selectedItem.title}
                </h2>
              </div>
              <FileText className="h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.75} />
            </div>
            <pre className="whitespace-pre-wrap rounded-sm border border-border bg-input p-3 text-sm leading-relaxed text-foreground text-mono">
              {selectedItem.text}
            </pre>
          </section>
        )}

        {/* README.txt block removed */}

        {/* Join */}
        <section id="join" className="mt-6 surface-window p-6 sm:p-8">
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3">
            access.request
          </div>
          <div className="grid md:grid-cols-[1fr_auto] gap-6 items-end">
            <div>
              <h3 className="text-xl sm:text-2xl font-medium tracking-tight">
                Request a key.
              </h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-md">
                Drop your email. I'll send the code that unlocks the folder,
                plus a heads-up before every new drop.
              </p>
            </div>

            {joined ? (
              <div className="text-sm text-mono text-foreground border border-border rounded-sm px-4 py-3 bg-selected">
                → key dispatched. check your inbox.
              </div>
            ) : (
              <form onSubmit={handleJoin} className="flex gap-2 w-full md:w-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@somewhere.com"
                  className="flex-1 md:w-64 text-mono text-sm bg-input border border-border rounded-sm px-3 py-2 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
                />
                <button
                  type="submit"
                  className="text-sm bg-foreground text-background rounded-sm px-4 py-2 hover:opacity-90 transition"
                >
                  Get key
                </button>
              </form>
            )}
          </div>
        </section>

        <footer className="mt-10 pb-4 flex items-center justify-between text-[11px] text-mono text-muted-foreground">
          <span>vault.exe · v0.7</span>
          <span>© {new Date().getFullYear()} · key holders only</span>
        </footer>
      </main>
    </div>
  );
}
