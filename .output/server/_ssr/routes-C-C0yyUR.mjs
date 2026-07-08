import { n as __toESM } from "../_runtime.mjs";
import {
  n as require_jsx_runtime,
  r as require_react,
} from "../_libs/react+tanstack__react-query.mjs";
import {
  _ as Download,
  a as Search,
  b as ArrowLeft,
  c as Pause,
  d as Lock,
  f as KeyRound,
  g as FileText,
  h as FolderOpen,
  i as Square,
  l as Music2,
  m as Folder,
  n as Video,
  o as RotateCw,
  p as Image,
  r as Upload,
  s as Play,
  t as X,
  u as Minus,
  v as ChevronRight,
  y as ArrowRight,
} from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-C-C0yyUR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FOLDERS = [
  {
    id: "drops",
    name: "Drops",
    count: 11,
    parent: void 0,
  },
  {
    id: "2017",
    name: "2017",
    count: 1,
    parent: "drops",
  },
  {
    id: "2018",
    name: "2018",
    count: 9,
    parent: "drops",
  },
  {
    id: "2020",
    name: "2020",
    count: 4,
    parent: "drops",
  },
  {
    id: "demos",
    name: "Demos",
    count: 8,
  },
  {
    id: "live",
    name: "Live",
    count: 1,
  },
  {
    id: "memos",
    name: "Voice memos",
    count: 4,
  },
  {
    id: "locations",
    name: "Locations",
    count: 1,
  },
  {
    id: "wolverhampton",
    name: "Wolverhampton",
    count: 8,
    parent: "locations",
  },
  {
    id: "home",
    name: "Home",
    count: 0,
    parent: "wolverhampton",
  },
  {
    id: "first-studio",
    name: "First Studio",
    count: 0,
    parent: "wolverhampton",
  },
  {
    id: "city-centre",
    name: "City Centre",
    count: 0,
    parent: "wolverhampton",
  },
  {
    id: "ring-road",
    name: "Ring Road",
    count: 0,
    parent: "wolverhampton",
  },
  {
    id: "train-station",
    name: "Train Station",
    count: 0,
    parent: "wolverhampton",
  },
  {
    id: "bus-station",
    name: "Bus Station",
    count: 0,
    parent: "wolverhampton",
  },
  {
    id: "west-park",
    name: "West Park",
    count: 0,
    parent: "wolverhampton",
  },
  {
    id: "canal",
    name: "Canal",
    count: 0,
    parent: "wolverhampton",
  },
  {
    id: "ideas",
    name: "Ideas",
    count: 4,
  },
  {
    id: "colour-palette",
    name: "Colour Palette",
    count: 0,
    parent: "ideas",
  },
  {
    id: "photography",
    name: "Photography",
    count: 0,
    parent: "ideas",
  },
  {
    id: "books",
    name: "Books",
    count: 0,
    parent: "ideas",
  },
  {
    id: "album-concepts",
    name: "Album Concepts",
    count: 0,
    parent: "ideas",
  },
  {
    id: "sessions",
    name: "Sessions",
    count: 5,
  },
  {
    id: "studio-001",
    name: "Studio_001",
    count: 0,
    parent: "sessions",
  },
  {
    id: "studio-002",
    name: "Studio_002",
    count: 0,
    parent: "sessions",
  },
  {
    id: "mixes",
    name: "Mixes",
    count: 0,
    parent: "sessions",
  },
  {
    id: "photos",
    name: "Photos",
    count: 0,
    parent: "sessions",
  },
  {
    id: "session-videos",
    name: "Videos",
    count: 0,
    parent: "sessions",
  },
  {
    id: "journals",
    name: "Journals",
    count: 2,
  },
  {
    id: "archive",
    name: "Archive",
    count: 12,
  },
  {
    id: "videos",
    name: "Videos",
    count: 2,
    parent: "archive",
  },
];
var TRACKS = [
  {
    id: "01",
    title: "midnight-reverb.wav",
    folder: "drops",
    kind: "Single",
    size: "38.2 MB",
    length: "3:42",
    modified: "2h ago",
    locked: false,
    media: "audio",
  },
  {
    id: "03",
    title: "slow-bleed_rework.wav",
    folder: "drops",
    kind: "Alt mix",
    size: "41.0 MB",
    length: "4:15",
    modified: "3d ago",
    locked: false,
    media: "audio",
  },
  {
    id: "04",
    title: "paper-cathedrals_live.wav",
    folder: "live",
    kind: "Live",
    size: "52.7 MB",
    length: "5:03",
    modified: "Fri",
    locked: true,
    media: "audio",
  },
  {
    id: "05",
    title: "untitled-III.m4a",
    folder: "memos",
    kind: "Voice memo",
    size: "8.4 MB",
    length: "1:47",
    modified: "Sun",
    locked: true,
    media: "audio",
  },
  {
    id: "06",
    title: "feral-season_b-side.wav",
    folder: "drops",
    kind: "B-side",
    size: "35.1 MB",
    length: "3:29",
    modified: "May 12",
    locked: true,
    media: "audio",
  },
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
function formatFileSize(bytes) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
function displayVideoTitle(item) {
  return item.title
    .replace(/\.[^.]+$/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
function folderPath(folderId) {
  const parts = [];
  let current = FOLDERS.find((f) => f.id === folderId);
  while (current) {
    parts.unshift(current.name);
    current = current.parent
      ? FOLDERS.find((f) => f.id === current.parent)
      : void 0;
  }
  return parts;
}
function VideoThumbnailCard({ item, isSelected, isActive, onOpen }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
    type: "button",
    onClick: () => onOpen(item),
    className: `group relative aspect-video overflow-hidden rounded-sm border bg-muted/40 text-left transition ${isSelected || isActive ? "border-accent ring-2 ring-accent/25" : "border-border hover:border-foreground/25 hover:shadow-md"}`,
    children: [
      item.src &&
        !item.locked &&
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
          src: item.src,
          preload: "metadata",
          muted: true,
          playsInline: true,
          className: "absolute inset-0 h-full w-full object-cover",
          onLoadedMetadata: (e) => {
            e.currentTarget.currentTime = Math.min(
              1,
              e.currentTarget.duration * 0.05,
            );
          },
        }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className:
          "absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/5",
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
        className: "absolute inset-0 grid place-items-center",
        children: item.locked
          ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              className:
                "grid place-items-center h-12 w-12 rounded-full bg-black/50 text-white backdrop-blur-sm",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
                className: "h-5 w-5",
                strokeWidth: 1.75,
              }),
            })
          : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              className:
                "grid place-items-center h-12 w-12 rounded-full bg-white/95 text-foreground shadow-lg transition group-hover:scale-105",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
                className: "h-5 w-5 fill-current ml-0.5",
              }),
            }),
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
        className:
          "absolute top-2 right-2 rounded-sm bg-black/55 px-1.5 py-0.5 text-[10px] text-white text-mono tabular-nums",
        children: item.locked ? "locked" : item.length,
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
        className: "absolute inset-x-0 bottom-0 p-3",
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className: "truncate text-sm font-medium text-white",
            children: displayVideoTitle(item),
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
            className: "mt-0.5 text-[11px] text-white/70",
            children: item.kind,
          }),
        ],
      }),
    ],
  });
}
function VaultPage() {
  const [folder, setFolder] = (0, import_react.useState)("drops");
  const [selected, setSelected] = (0, import_react.useState)("01");
  const [playing, setPlaying] = (0, import_react.useState)(null);
  const [activeVideo, setActiveVideo] = (0, import_react.useState)(null);
  const audioRef = (0, import_react.useRef)(null);
  const [loadedVideos, setLoadedVideos] = (0, import_react.useState)([]);
  const [email, setEmail] = (0, import_react.useState)("");
  const [joined, setJoined] = (0, import_react.useState)(false);
  const fileInputRef = (0, import_react.useRef)(null);
  const currentFolder = FOLDERS.find((f) => f.id === folder);
  const allItems = [...TRACKS, ...loadedVideos];
  const visible = allItems.filter((t) => t.folder === folder);
  const imageItems = visible.filter((t) => t.media === "image");
  const fileItems = visible.filter((t) => t.media !== "image");
  const path = folderPath(folder);
  const parentFolder = currentFolder.parent
    ? FOLDERS.find((f) => f.id === currentFolder.parent)
    : void 0;
  const selectedItem = selected
    ? allItems.find((t) => t.id === selected)
    : void 0;
  const activeVideoItem = activeVideo
    ? allItems.find((t) => t.id === activeVideo)
    : void 0;
  const isVideosFolder = folder === "videos";
  const openFolder = (id) => {
    setFolder(id);
    setSelected(null);
    setPlaying(null);
    setActiveVideo(null);
  };
  const openVideo = (item) => {
    if (item.locked) return;
    setSelected(item.id);
    setActiveVideo(item.id);
    setPlaying(null);
  };
  const togglePlay = (item) => {
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
  (0, import_react.useEffect)(() => {
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
  const handleVideoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const id = `upload-${Date.now()}`;
    const item = {
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
  const handleJoin = (e) => {
    e.preventDefault();
    if (email.includes("@")) setJoined(true);
  };
  const renderItemIcon = (item) => {
    if (item.locked)
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
        className: "h-3.5 w-3.5",
        strokeWidth: 1.75,
      });
    if (item.media === "video")
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, {
        className: "h-3.5 w-3.5",
        strokeWidth: 1.75,
      });
    if (item.media === "image")
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Image, {
        className: "h-3.5 w-3.5",
        strokeWidth: 1.75,
      });
    if (item.media === "text")
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
        className: "h-3.5 w-3.5",
        strokeWidth: 1.75,
      });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music2, {
      className: "h-3.5 w-3.5",
      strokeWidth: 1.75,
    });
  };
  const renderFolderTree = (parentId, depth = 0) =>
    FOLDERS.filter((f) => f.parent === parentId).map((f) => {
      const active = f.id === folder;
      const count = f.id === "videos" ? f.count + loadedVideos.length : f.count;
      return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        "div",
        {
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
              onClick: () => openFolder(f.id),
              className: `w-full flex items-center gap-2 py-1.5 pr-3 text-sm text-left transition ${active ? "bg-selected text-selected-foreground" : "hover:bg-row-hover text-foreground/80"}`,
              style: { paddingLeft: `${12 + depth * 16}px` },
              children: [
                active
                  ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, {
                      className: "h-3.5 w-3.5 shrink-0",
                      strokeWidth: 1.75,
                    })
                  : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, {
                      className: "h-3.5 w-3.5 shrink-0",
                      strokeWidth: 1.75,
                    }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "truncate",
                  children: f.name,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className:
                    "ml-auto text-[10px] text-muted-foreground text-mono",
                  children: count,
                }),
              ],
            }),
            renderFolderTree(f.id, depth + 1),
          ],
        },
        f.id,
      );
    });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
    className: "min-h-screen bg-background text-foreground",
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
      className: "relative z-10 mx-auto max-w-5xl px-4 sm:px-6 py-10 sm:py-16",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: "mb-6 flex items-center justify-between",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex items-center gap-2 text-sm",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, {
                  className: "h-4 w-4",
                  strokeWidth: 1.5,
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "font-medium tracking-tight",
                  children: "Imram's World",
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                  className: "text-muted-foreground",
                  children: "/ You're early",
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className: "flex items-center gap-4",
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
                href: "#join",
                className:
                  "text-xs text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4",
                children: "Request access",
              }),
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className: "surface-window overflow-hidden",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className:
                "surface-chrome flex items-center justify-between px-3 py-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "flex items-center gap-2 text-[11px] text-muted-foreground text-mono",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderOpen, {
                      className: "h-3.5 w-3.5",
                      strokeWidth: 1.75,
                    }),
                    "vault:\\\\",
                    path.map((part) => part.toLowerCase()).join("\\"),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex items-center gap-1.5",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                      "aria-label": "minimize",
                      className:
                        "grid place-items-center h-5 w-5 rounded-sm hover:bg-muted transition text-muted-foreground",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        Minus,
                        { className: "h-3 w-3" },
                      ),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                      "aria-label": "maximize",
                      className:
                        "grid place-items-center h-5 w-5 rounded-sm hover:bg-muted transition text-muted-foreground",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        Square,
                        { className: "h-2.5 w-2.5" },
                      ),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                      "aria-label": "close",
                      className:
                        "grid place-items-center h-5 w-5 rounded-sm hover:bg-destructive hover:text-destructive-foreground transition text-muted-foreground",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
                        className: "h-3 w-3",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "surface-chrome flex items-center gap-2 px-3 py-2",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "flex items-center gap-0.5 text-muted-foreground",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                      className:
                        "p-1 rounded-sm hover:bg-muted hover:text-foreground disabled:opacity-40",
                      disabled: !parentFolder,
                      "aria-label": "back",
                      onClick: () =>
                        parentFolder && openFolder(parentFolder.id),
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        ArrowLeft,
                        { className: "h-3.5 w-3.5" },
                      ),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                      className:
                        "p-1 rounded-sm hover:bg-muted hover:text-foreground disabled:opacity-40",
                      disabled: true,
                      "aria-label": "forward",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        ArrowRight,
                        { className: "h-3.5 w-3.5" },
                      ),
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                      className:
                        "p-1 rounded-sm hover:bg-muted hover:text-foreground",
                      "aria-label": "refresh",
                      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                        RotateCw,
                        { className: "h-3.5 w-3.5" },
                      ),
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "flex-1 flex items-center gap-1 text-xs text-mono bg-card border border-border rounded-sm px-2 py-1 min-w-0",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
                      className: "text-muted-foreground shrink-0",
                      children: "Vault",
                    }),
                    path.map((part) =>
                      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                        "span",
                        {
                          className: "flex items-center gap-1 min-w-0",
                          children: [
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              ChevronRight,
                              {
                                className:
                                  "h-3 w-3 text-muted-foreground shrink-0",
                              },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                              "span",
                              {
                                className: "truncate",
                                children: part,
                              },
                            ),
                          ],
                        },
                        part,
                      ),
                    ),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className:
                    "hidden sm:flex items-center gap-1.5 text-xs text-mono bg-card border border-border rounded-sm px-2 py-1 w-48",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, {
                      className: "h-3 w-3 text-muted-foreground",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                      className: "text-muted-foreground",
                      children: ["Search ", currentFolder.name.toLowerCase()],
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "grid grid-cols-[140px_1fr] sm:grid-cols-[180px_1fr]",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
                  className: "border-r border-border bg-chrome/40 py-2",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className:
                        "px-3 pt-1 pb-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
                      children: "Folders",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
                      children: renderFolderTree(),
                    }),
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className: "min-w-0",
                  children: isVideosFolder
                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                        className: "min-w-0",
                        children: [
                          activeVideoItem?.src &&
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className: "border-b border-border bg-card",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "video",
                                    {
                                      src: activeVideoItem.src,
                                      controls: true,
                                      autoPlay: true,
                                      playsInline: true,
                                      className:
                                        "aspect-video w-full bg-foreground/5 object-contain",
                                    },
                                    activeVideoItem.src,
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                    "div",
                                    {
                                      className:
                                        "flex items-center justify-between gap-3 px-4 py-3",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("div", {
                                          className: "min-w-0",
                                          children: [
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("p", {
                                              className:
                                                "truncate text-sm font-medium",
                                              children:
                                                displayVideoTitle(
                                                  activeVideoItem,
                                                ),
                                            }),
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsxs)("p", {
                                              className:
                                                "text-[11px] text-muted-foreground text-mono",
                                              children: [
                                                activeVideoItem.kind,
                                                " · ",
                                                activeVideoItem.length,
                                              ],
                                            }),
                                          ],
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("button", {
                                          type: "button",
                                          onClick: () => setActiveVideo(null),
                                          className:
                                            "shrink-0 text-[11px] text-muted-foreground hover:text-foreground transition underline underline-offset-4",
                                          children: "close",
                                        }),
                                      ],
                                    },
                                  ),
                                ],
                              },
                            ),
                          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                            className: "p-4",
                            children: [
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className:
                                    "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                  children: [
                                    visible.map((item) =>
                                      /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsx)(
                                        VideoThumbnailCard,
                                        {
                                          item,
                                          isSelected: selected === item.id,
                                          isActive: activeVideo === item.id,
                                          onOpen: openVideo,
                                        },
                                        item.id,
                                      ),
                                    ),
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("button", {
                                      type: "button",
                                      onClick: () =>
                                        fileInputRef.current?.click(),
                                      className:
                                        "group relative flex aspect-video flex-col items-center justify-center gap-2 rounded-sm border border-dashed border-border bg-chrome/30 text-muted-foreground transition hover:border-foreground/30 hover:bg-row-hover hover:text-foreground",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className:
                                            "grid place-items-center h-10 w-10 rounded-full border border-border bg-card transition group-hover:border-foreground/30",
                                          children: /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)(Upload, {
                                            className: "h-4 w-4",
                                            strokeWidth: 1.75,
                                          }),
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsx)("span", {
                                          className: "text-sm",
                                          children: "Add video",
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                              ),
                              /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                "input",
                                {
                                  ref: fileInputRef,
                                  type: "file",
                                  accept: "video/*",
                                  className: "hidden",
                                  onChange: handleVideoUpload,
                                },
                              ),
                              visible.length === 0 &&
                                /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                  "p",
                                  {
                                    className:
                                      "mt-6 text-center text-sm text-muted-foreground",
                                    children:
                                      "No videos yet. Add one to get started.",
                                  },
                                ),
                            ],
                          }),
                        ],
                      })
                    : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                        import_jsx_runtime.Fragment,
                        {
                          children: [
                            imageItems.length > 0 &&
                              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                                "div",
                                {
                                  className: "p-4",
                                  children: [
                                    /* @__PURE__ */ (0,
                                    import_jsx_runtime.jsxs)("div", {
                                      className:
                                        "mb-3 flex items-center justify-between gap-3",
                                      children: [
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("div", {
                                          children: [
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("div", {
                                              className:
                                                "text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
                                              children: "photo previews",
                                            }),
                                            /* @__PURE__ */ (0,
                                            import_jsx_runtime.jsx)("h2", {
                                              className:
                                                "text-sm font-medium text-foreground",
                                              children: currentFolder.name,
                                            }),
                                          ],
                                        }),
                                        /* @__PURE__ */ (0,
                                        import_jsx_runtime.jsxs)("span", {
                                          className:
                                            "text-xs text-muted-foreground",
                                          children: [
                                            imageItems.length,
                                            " photo",
                                            imageItems.length === 1 ? "" : "s",
                                          ],
                                        }),
                                      ],
                                    }),
                                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                      "div",
                                      {
                                        className: `grid gap-3 sm:grid-cols-2 lg:grid-cols-3`,
                                        children: imageItems.map((item) =>
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)(
                                            "button",
                                            {
                                              type: "button",
                                              onClick: () =>
                                                setSelected(item.id),
                                              className: `group overflow-hidden rounded-sm border border-border bg-card text-left transition hover:shadow-lg `,
                                              children: [
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)("div", {
                                                  className: `relative overflow-hidden bg-slate-950/5 h-48`,
                                                  children: /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    "img",
                                                    {
                                                      src: item.src,
                                                      alt: item.title,
                                                      className:
                                                        "h-full w-full object-cover transition duration-300 group-hover:scale-105",
                                                    },
                                                  ),
                                                }),
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)("div", {
                                                  className: "space-y-1 p-3",
                                                  children: /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    "div",
                                                    {
                                                      className:
                                                        "text-[11px] text-muted-foreground",
                                                      children: item.kind,
                                                    },
                                                  ),
                                                }),
                                              ],
                                            },
                                            item.id,
                                          ),
                                        ),
                                      },
                                    ),
                                  ],
                                },
                              ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
                              "div",
                              {
                                className:
                                  "hidden md:grid grid-cols-[1fr_90px_70px_80px] gap-4 px-4 py-2 border-b border-border text-[10px] uppercase tracking-[0.18em] text-muted-foreground bg-chrome/50",
                                children: [
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    { children: "Name" },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    { children: "Type" },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    {
                                      className: "text-right",
                                      children: "Length",
                                    },
                                  ),
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "div",
                                    {
                                      className: "text-right",
                                      children: "Modified",
                                    },
                                  ),
                                ],
                              },
                            ),
                            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
                              className: "divide-y divide-border",
                              children: [
                                fileItems.map((t) => {
                                  const isSelected = selected === t.id;
                                  const isPlaying = playing === t.id;
                                  return /* @__PURE__ */ (0,
                                  import_jsx_runtime.jsx)(
                                    "li",
                                    {
                                      children: /* @__PURE__ */ (0,
                                      import_jsx_runtime.jsxs)("button", {
                                        onClick: () => setSelected(t.id),
                                        onDoubleClick: () => togglePlay(t),
                                        className: `w-full grid grid-cols-[24px_1fr_auto] md:grid-cols-[24px_1fr_90px_70px_80px] gap-3 md:gap-4 items-center px-4 py-2.5 text-left transition ${isSelected ? "bg-selected" : "hover:bg-row-hover"} ${t.locked ? "text-muted-foreground" : ""}`,
                                        children: [
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("span", {
                                            className:
                                              "grid place-items-center",
                                            children: renderItemIcon(t),
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsxs)("span", {
                                            className:
                                              "min-w-0 flex items-center gap-2",
                                            children: [
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)(
                                                "button",
                                                {
                                                  type: "button",
                                                  onClick: (e) => {
                                                    e.stopPropagation();
                                                    if (t.locked) return;
                                                    togglePlay(t);
                                                  },
                                                  "aria-label": isPlaying
                                                    ? "pause"
                                                    : "play",
                                                  className: `grid place-items-center h-7 w-7 rounded-sm ${t.locked ? "border-border text-muted-foreground" : "border-border hover:bg-foreground hover:text-background transition"}`,
                                                  children: isPlaying
                                                    ? /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        Pause,
                                                        {
                                                          className:
                                                            "h-3 w-3 fill-current",
                                                        },
                                                      )
                                                    : /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        Play,
                                                        {
                                                          className:
                                                            "h-3 w-3 fill-current ml-px",
                                                        },
                                                      ),
                                                },
                                              ),
                                              /* @__PURE__ */ (0,
                                              import_jsx_runtime.jsx)("span", {
                                                className:
                                                  "text-mono text-sm truncate",
                                                children: t.title,
                                              }),
                                              t.folder === "demos" &&
                                                t.media === "audio" &&
                                                t.src &&
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)("a", {
                                                  href: t.src,
                                                  download: true,
                                                  className:
                                                    "inline-flex h-7 w-7 items-center justify-center rounded-sm border border-border text-muted-foreground hover:bg-foreground hover:text-background transition",
                                                  "aria-label": `Download ${t.title}`,
                                                  children: /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    Download,
                                                    { className: "h-3 w-3" },
                                                  ),
                                                }),
                                              isPlaying &&
                                                /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsxs)(
                                                  "span",
                                                  {
                                                    className:
                                                      "inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.15em] text-accent",
                                                    children: [
                                                      /* @__PURE__ */ (0,
                                                      import_jsx_runtime.jsx)(
                                                        "span",
                                                        {
                                                          className:
                                                            "h-1.5 w-1.5 rounded-full bg-accent",
                                                        },
                                                      ),
                                                      "playing",
                                                    ],
                                                  },
                                                ),
                                            ],
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("span", {
                                            className:
                                              "hidden md:block text-xs text-muted-foreground truncate",
                                            children: t.kind,
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("span", {
                                            className:
                                              "text-mono text-xs text-muted-foreground text-right tabular-nums",
                                            children: t.locked
                                              ? "—:—"
                                              : t.length,
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("span", {
                                            className:
                                              "hidden md:block text-xs text-muted-foreground text-right truncate",
                                            children: t.modified,
                                          }),
                                          /* @__PURE__ */ (0,
                                          import_jsx_runtime.jsx)("span", {
                                            role: "button",
                                            tabIndex: 0,
                                            onClick: (e) => {
                                              e.stopPropagation();
                                              togglePlay(t);
                                            },
                                            className: `md:hidden justify-self-end grid place-items-center h-7 w-7 rounded-sm border ${t.locked ? "border-border text-muted-foreground" : "border-border hover:bg-foreground hover:text-background transition"}`,
                                            "aria-label": t.locked
                                              ? "locked"
                                              : isPlaying
                                                ? "pause"
                                                : "play",
                                            children: t.locked
                                              ? /* @__PURE__ */ (0,
                                                import_jsx_runtime.jsx)(Lock, {
                                                  className: "h-3 w-3",
                                                  strokeWidth: 1.75,
                                                })
                                              : isPlaying
                                                ? /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    Pause,
                                                    {
                                                      className:
                                                        "h-3 w-3 fill-current",
                                                    },
                                                  )
                                                : /* @__PURE__ */ (0,
                                                  import_jsx_runtime.jsx)(
                                                    Play,
                                                    {
                                                      className:
                                                        "h-3 w-3 fill-current ml-px",
                                                    },
                                                  ),
                                          }),
                                        ],
                                      }),
                                    },
                                    t.id,
                                  );
                                }),
                                visible.length === 0 &&
                                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                                    "li",
                                    {
                                      className:
                                        "px-4 py-16 text-center text-sm text-muted-foreground",
                                      children: "This folder is empty.",
                                    },
                                  ),
                              ],
                            }),
                          ],
                        },
                      ),
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className:
                "surface-chrome border-t border-b-0 flex items-center justify-between px-3 py-1.5 text-[11px] text-muted-foreground text-mono",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                  children: [
                    visible.length,
                    " item",
                    visible.length === 1 ? "" : "s",
                    selected ? ` · 1 selected` : "",
                  ],
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
                  className: "hidden sm:inline",
                  children: [
                    visible.filter((t) => t.locked).length,
                    " locked ·",
                    " ",
                    isVideosFolder
                      ? "click a video to open"
                      : "double-click to play",
                  ],
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          className:
            "mt-4 grid sm:grid-cols-[1fr_auto] gap-3 items-center surface-window px-4 py-3",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "flex items-center gap-3 min-w-0",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                  className:
                    "grid place-items-center h-9 w-9 rounded-sm bg-muted shrink-0",
                  children: selectedItem?.locked
                    ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, {
                        className: "h-4 w-4 text-muted-foreground",
                        strokeWidth: 1.75,
                      })
                    : selectedItem?.media === "video"
                      ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Video, {
                          className: "h-4 w-4",
                          strokeWidth: 1.75,
                        })
                      : selectedItem?.media === "text"
                        ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                            FileText,
                            {
                              className: "h-4 w-4",
                              strokeWidth: 1.75,
                            },
                          )
                        : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Music2, {
                            className: "h-4 w-4",
                            strokeWidth: 1.75,
                          }),
                }),
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  className: "min-w-0",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "text-mono text-sm truncate",
                      children: selectedItem
                        ? selectedItem.media === "video"
                          ? displayVideoTitle(selectedItem)
                          : selectedItem.title
                        : "no file selected",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className: "text-[11px] text-muted-foreground text-mono",
                      children: selectedItem
                        ? `${selectedItem.kind} · ${selectedItem.size}`
                        : "select a track above",
                    }),
                  ],
                }),
              ],
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className:
                "text-[11px] text-muted-foreground text-mono sm:text-right",
              children: "properties",
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
          ref: (el) => (audioRef.current = el),
          style: { display: "none" },
        }),
        selectedItem?.media === "text" &&
          /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
            className: "mt-4 surface-window p-4",
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                className: "mb-3 flex items-center justify-between gap-3",
                children: [
                  /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                    className: "min-w-0",
                    children: [
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                        className:
                          "text-[10px] uppercase tracking-[0.18em] text-muted-foreground",
                        children: "text.preview",
                      }),
                      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
                        className:
                          "mt-1 truncate text-sm font-medium text-mono",
                        children: selectedItem.title,
                      }),
                    ],
                  }),
                  /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, {
                    className: "h-4 w-4 shrink-0 text-muted-foreground",
                    strokeWidth: 1.75,
                  }),
                ],
              }),
              /* @__PURE__ */ (0, import_jsx_runtime.jsx)("pre", {
                className:
                  "whitespace-pre-wrap rounded-sm border border-border bg-input p-3 text-sm leading-relaxed text-foreground text-mono",
                children: selectedItem.text,
              }),
            ],
          }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
          id: "join",
          className: "mt-6 surface-window p-6 sm:p-8",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
              className:
                "text-[10px] uppercase tracking-[0.18em] text-muted-foreground mb-3",
              children: "access.request",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
              className: "grid md:grid-cols-[1fr_auto] gap-6 items-end",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
                      className:
                        "text-xl sm:text-2xl font-medium tracking-tight",
                      children: "Request a key.",
                    }),
                    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
                      className: "mt-2 text-sm text-muted-foreground max-w-md",
                      children:
                        "Drop your email. I'll send the code that unlocks the folder, plus a heads-up before every new drop.",
                    }),
                  ],
                }),
                joined
                  ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
                      className:
                        "text-sm text-mono text-foreground border border-border rounded-sm px-4 py-3 bg-selected",
                      children: "→ key dispatched. check your inbox.",
                    })
                  : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
                      onSubmit: handleJoin,
                      className: "flex gap-2 w-full md:w-auto",
                      children: [
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
                          type: "email",
                          required: true,
                          value: email,
                          onChange: (e) => setEmail(e.target.value),
                          placeholder: "you@somewhere.com",
                          className:
                            "flex-1 md:w-64 text-mono text-sm bg-input border border-border rounded-sm px-3 py-2 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition",
                        }),
                        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
                          type: "submit",
                          className:
                            "text-sm bg-foreground text-background rounded-sm px-4 py-2 hover:opacity-90 transition",
                          children: "Get key",
                        }),
                      ],
                    }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
          className:
            "mt-10 pb-4 flex items-center justify-between text-[11px] text-mono text-muted-foreground",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
              children: "vault.exe · v0.7",
            }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
              children: [
                "© ",
                /* @__PURE__ */ new Date().getFullYear(),
                " · key holders only",
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
//#endregion
export { VaultPage as component };
