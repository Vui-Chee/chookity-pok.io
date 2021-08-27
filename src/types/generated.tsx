import { gql } from "@apollo/client"
import * as Apollo from "@apollo/client"
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
}

export type AvifOptions = {
  quality?: Maybe<Scalars["Int"]>
  lossless?: Maybe<Scalars["Boolean"]>
  speed?: Maybe<Scalars["Int"]>
}

export type Author = {
  __typename?: "Author"
  name?: Maybe<Scalars["String"]>
  summary?: Maybe<Scalars["String"]>
}

export type AuthorFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  summary?: Maybe<StringQueryOperatorInput>
}

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars["Int"]>
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>
}

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars["Boolean"]>
  ne?: Maybe<Scalars["Boolean"]>
  in?: Maybe<Array<Maybe<Scalars["Boolean"]>>>
  nin?: Maybe<Array<Maybe<Scalars["Boolean"]>>>
}

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars["Date"]>
  ne?: Maybe<Scalars["Date"]>
  gt?: Maybe<Scalars["Date"]>
  gte?: Maybe<Scalars["Date"]>
  lt?: Maybe<Scalars["Date"]>
  lte?: Maybe<Scalars["Date"]>
  in?: Maybe<Array<Maybe<Scalars["Date"]>>>
  nin?: Maybe<Array<Maybe<Scalars["Date"]>>>
}

export type Directory = Node & {
  __typename?: "Directory"
  sourceInstanceName: Scalars["String"]
  absolutePath: Scalars["String"]
  relativePath: Scalars["String"]
  extension: Scalars["String"]
  size: Scalars["Int"]
  prettySize: Scalars["String"]
  modifiedTime: Scalars["Date"]
  accessTime: Scalars["Date"]
  changeTime: Scalars["Date"]
  birthTime: Scalars["Date"]
  root: Scalars["String"]
  dir: Scalars["String"]
  base: Scalars["String"]
  ext: Scalars["String"]
  name: Scalars["String"]
  relativeDirectory: Scalars["String"]
  dev: Scalars["Int"]
  mode: Scalars["Int"]
  nlink: Scalars["Int"]
  uid: Scalars["Int"]
  gid: Scalars["Int"]
  rdev: Scalars["Int"]
  ino: Scalars["Float"]
  atimeMs: Scalars["Float"]
  mtimeMs: Scalars["Float"]
  ctimeMs: Scalars["Float"]
  atime: Scalars["Date"]
  mtime: Scalars["Date"]
  ctime: Scalars["Date"]
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>
  blksize?: Maybe<Scalars["Int"]>
  blocks?: Maybe<Scalars["Int"]>
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type DirectoryConnection = {
  __typename?: "DirectoryConnection"
  totalCount: Scalars["Int"]
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<DirectoryGroupConnection>
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  __typename?: "DirectoryEdge"
  next?: Maybe<Directory>
  node: Directory
  previous?: Maybe<Directory>
}

export enum DirectoryFieldsEnum {
  sourceInstanceName = "sourceInstanceName",
  absolutePath = "absolutePath",
  relativePath = "relativePath",
  extension = "extension",
  size = "size",
  prettySize = "prettySize",
  modifiedTime = "modifiedTime",
  accessTime = "accessTime",
  changeTime = "changeTime",
  birthTime = "birthTime",
  root = "root",
  dir = "dir",
  base = "base",
  ext = "ext",
  name = "name",
  relativeDirectory = "relativeDirectory",
  dev = "dev",
  mode = "mode",
  nlink = "nlink",
  uid = "uid",
  gid = "gid",
  rdev = "rdev",
  ino = "ino",
  atimeMs = "atimeMs",
  mtimeMs = "mtimeMs",
  ctimeMs = "ctimeMs",
  atime = "atime",
  mtime = "mtime",
  ctime = "ctime",
  birthtime = "birthtime",
  birthtimeMs = "birthtimeMs",
  blksize = "blksize",
  blocks = "blocks",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type DirectoryGroupConnection = {
  __typename?: "DirectoryGroupConnection"
  totalCount: Scalars["Int"]
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type DuotoneGradient = {
  highlight: Scalars["String"]
  shadow: Scalars["String"]
  opacity?: Maybe<Scalars["Int"]>
}

export type Fields = {
  __typename?: "Fields"
  slug?: Maybe<Scalars["String"]>
  contentType?: Maybe<Scalars["String"]>
}

export type FieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>
  contentType?: Maybe<StringQueryOperatorInput>
}

export type File = Node & {
  __typename?: "File"
  sourceInstanceName: Scalars["String"]
  absolutePath: Scalars["String"]
  relativePath: Scalars["String"]
  extension: Scalars["String"]
  size: Scalars["Int"]
  prettySize: Scalars["String"]
  modifiedTime: Scalars["Date"]
  accessTime: Scalars["Date"]
  changeTime: Scalars["Date"]
  birthTime: Scalars["Date"]
  root: Scalars["String"]
  dir: Scalars["String"]
  base: Scalars["String"]
  ext: Scalars["String"]
  name: Scalars["String"]
  relativeDirectory: Scalars["String"]
  dev: Scalars["Int"]
  mode: Scalars["Int"]
  nlink: Scalars["Int"]
  uid: Scalars["Int"]
  gid: Scalars["Int"]
  rdev: Scalars["Int"]
  ino: Scalars["Float"]
  atimeMs: Scalars["Float"]
  mtimeMs: Scalars["Float"]
  ctimeMs: Scalars["Float"]
  atime: Scalars["Date"]
  mtime: Scalars["Date"]
  ctime: Scalars["Date"]
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars["Date"]>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars["Float"]>
  blksize?: Maybe<Scalars["Int"]>
  blocks?: Maybe<Scalars["Int"]>
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars["String"]>
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type FileConnection = {
  __typename?: "FileConnection"
  totalCount: Scalars["Int"]
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<FileGroupConnection>
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum
}

export type FileConnectionMinArgs = {
  field: FileFieldsEnum
}

export type FileConnectionSumArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: FileFieldsEnum
}

export type FileEdge = {
  __typename?: "FileEdge"
  next?: Maybe<File>
  node: File
  previous?: Maybe<File>
}

export enum FileFieldsEnum {
  sourceInstanceName = "sourceInstanceName",
  absolutePath = "absolutePath",
  relativePath = "relativePath",
  extension = "extension",
  size = "size",
  prettySize = "prettySize",
  modifiedTime = "modifiedTime",
  accessTime = "accessTime",
  changeTime = "changeTime",
  birthTime = "birthTime",
  root = "root",
  dir = "dir",
  base = "base",
  ext = "ext",
  name = "name",
  relativeDirectory = "relativeDirectory",
  dev = "dev",
  mode = "mode",
  nlink = "nlink",
  uid = "uid",
  gid = "gid",
  rdev = "rdev",
  ino = "ino",
  atimeMs = "atimeMs",
  mtimeMs = "mtimeMs",
  ctimeMs = "ctimeMs",
  atime = "atime",
  mtime = "mtime",
  ctime = "ctime",
  birthtime = "birthtime",
  birthtimeMs = "birthtimeMs",
  blksize = "blksize",
  blocks = "blocks",
  publicURL = "publicURL",
  childrenImageSharp = "childrenImageSharp",
  childrenImageSharp___fixed___base64 = "childrenImageSharp___fixed___base64",
  childrenImageSharp___fixed___tracedSVG = "childrenImageSharp___fixed___tracedSVG",
  childrenImageSharp___fixed___aspectRatio = "childrenImageSharp___fixed___aspectRatio",
  childrenImageSharp___fixed___width = "childrenImageSharp___fixed___width",
  childrenImageSharp___fixed___height = "childrenImageSharp___fixed___height",
  childrenImageSharp___fixed___src = "childrenImageSharp___fixed___src",
  childrenImageSharp___fixed___srcSet = "childrenImageSharp___fixed___srcSet",
  childrenImageSharp___fixed___srcWebp = "childrenImageSharp___fixed___srcWebp",
  childrenImageSharp___fixed___srcSetWebp = "childrenImageSharp___fixed___srcSetWebp",
  childrenImageSharp___fixed___originalName = "childrenImageSharp___fixed___originalName",
  childrenImageSharp___fluid___base64 = "childrenImageSharp___fluid___base64",
  childrenImageSharp___fluid___tracedSVG = "childrenImageSharp___fluid___tracedSVG",
  childrenImageSharp___fluid___aspectRatio = "childrenImageSharp___fluid___aspectRatio",
  childrenImageSharp___fluid___src = "childrenImageSharp___fluid___src",
  childrenImageSharp___fluid___srcSet = "childrenImageSharp___fluid___srcSet",
  childrenImageSharp___fluid___srcWebp = "childrenImageSharp___fluid___srcWebp",
  childrenImageSharp___fluid___srcSetWebp = "childrenImageSharp___fluid___srcSetWebp",
  childrenImageSharp___fluid___sizes = "childrenImageSharp___fluid___sizes",
  childrenImageSharp___fluid___originalImg = "childrenImageSharp___fluid___originalImg",
  childrenImageSharp___fluid___originalName = "childrenImageSharp___fluid___originalName",
  childrenImageSharp___fluid___presentationWidth = "childrenImageSharp___fluid___presentationWidth",
  childrenImageSharp___fluid___presentationHeight = "childrenImageSharp___fluid___presentationHeight",
  childrenImageSharp___gatsbyImageData = "childrenImageSharp___gatsbyImageData",
  childrenImageSharp___original___width = "childrenImageSharp___original___width",
  childrenImageSharp___original___height = "childrenImageSharp___original___height",
  childrenImageSharp___original___src = "childrenImageSharp___original___src",
  childrenImageSharp___resize___src = "childrenImageSharp___resize___src",
  childrenImageSharp___resize___tracedSVG = "childrenImageSharp___resize___tracedSVG",
  childrenImageSharp___resize___width = "childrenImageSharp___resize___width",
  childrenImageSharp___resize___height = "childrenImageSharp___resize___height",
  childrenImageSharp___resize___aspectRatio = "childrenImageSharp___resize___aspectRatio",
  childrenImageSharp___resize___originalName = "childrenImageSharp___resize___originalName",
  childrenImageSharp___id = "childrenImageSharp___id",
  childrenImageSharp___parent___id = "childrenImageSharp___parent___id",
  childrenImageSharp___parent___parent___id = "childrenImageSharp___parent___parent___id",
  childrenImageSharp___parent___parent___children = "childrenImageSharp___parent___parent___children",
  childrenImageSharp___parent___children = "childrenImageSharp___parent___children",
  childrenImageSharp___parent___children___id = "childrenImageSharp___parent___children___id",
  childrenImageSharp___parent___children___children = "childrenImageSharp___parent___children___children",
  childrenImageSharp___parent___internal___content = "childrenImageSharp___parent___internal___content",
  childrenImageSharp___parent___internal___contentDigest = "childrenImageSharp___parent___internal___contentDigest",
  childrenImageSharp___parent___internal___description = "childrenImageSharp___parent___internal___description",
  childrenImageSharp___parent___internal___fieldOwners = "childrenImageSharp___parent___internal___fieldOwners",
  childrenImageSharp___parent___internal___ignoreType = "childrenImageSharp___parent___internal___ignoreType",
  childrenImageSharp___parent___internal___mediaType = "childrenImageSharp___parent___internal___mediaType",
  childrenImageSharp___parent___internal___owner = "childrenImageSharp___parent___internal___owner",
  childrenImageSharp___parent___internal___type = "childrenImageSharp___parent___internal___type",
  childrenImageSharp___children = "childrenImageSharp___children",
  childrenImageSharp___children___id = "childrenImageSharp___children___id",
  childrenImageSharp___children___parent___id = "childrenImageSharp___children___parent___id",
  childrenImageSharp___children___parent___children = "childrenImageSharp___children___parent___children",
  childrenImageSharp___children___children = "childrenImageSharp___children___children",
  childrenImageSharp___children___children___id = "childrenImageSharp___children___children___id",
  childrenImageSharp___children___children___children = "childrenImageSharp___children___children___children",
  childrenImageSharp___children___internal___content = "childrenImageSharp___children___internal___content",
  childrenImageSharp___children___internal___contentDigest = "childrenImageSharp___children___internal___contentDigest",
  childrenImageSharp___children___internal___description = "childrenImageSharp___children___internal___description",
  childrenImageSharp___children___internal___fieldOwners = "childrenImageSharp___children___internal___fieldOwners",
  childrenImageSharp___children___internal___ignoreType = "childrenImageSharp___children___internal___ignoreType",
  childrenImageSharp___children___internal___mediaType = "childrenImageSharp___children___internal___mediaType",
  childrenImageSharp___children___internal___owner = "childrenImageSharp___children___internal___owner",
  childrenImageSharp___children___internal___type = "childrenImageSharp___children___internal___type",
  childrenImageSharp___internal___content = "childrenImageSharp___internal___content",
  childrenImageSharp___internal___contentDigest = "childrenImageSharp___internal___contentDigest",
  childrenImageSharp___internal___description = "childrenImageSharp___internal___description",
  childrenImageSharp___internal___fieldOwners = "childrenImageSharp___internal___fieldOwners",
  childrenImageSharp___internal___ignoreType = "childrenImageSharp___internal___ignoreType",
  childrenImageSharp___internal___mediaType = "childrenImageSharp___internal___mediaType",
  childrenImageSharp___internal___owner = "childrenImageSharp___internal___owner",
  childrenImageSharp___internal___type = "childrenImageSharp___internal___type",
  childImageSharp___fixed___base64 = "childImageSharp___fixed___base64",
  childImageSharp___fixed___tracedSVG = "childImageSharp___fixed___tracedSVG",
  childImageSharp___fixed___aspectRatio = "childImageSharp___fixed___aspectRatio",
  childImageSharp___fixed___width = "childImageSharp___fixed___width",
  childImageSharp___fixed___height = "childImageSharp___fixed___height",
  childImageSharp___fixed___src = "childImageSharp___fixed___src",
  childImageSharp___fixed___srcSet = "childImageSharp___fixed___srcSet",
  childImageSharp___fixed___srcWebp = "childImageSharp___fixed___srcWebp",
  childImageSharp___fixed___srcSetWebp = "childImageSharp___fixed___srcSetWebp",
  childImageSharp___fixed___originalName = "childImageSharp___fixed___originalName",
  childImageSharp___fluid___base64 = "childImageSharp___fluid___base64",
  childImageSharp___fluid___tracedSVG = "childImageSharp___fluid___tracedSVG",
  childImageSharp___fluid___aspectRatio = "childImageSharp___fluid___aspectRatio",
  childImageSharp___fluid___src = "childImageSharp___fluid___src",
  childImageSharp___fluid___srcSet = "childImageSharp___fluid___srcSet",
  childImageSharp___fluid___srcWebp = "childImageSharp___fluid___srcWebp",
  childImageSharp___fluid___srcSetWebp = "childImageSharp___fluid___srcSetWebp",
  childImageSharp___fluid___sizes = "childImageSharp___fluid___sizes",
  childImageSharp___fluid___originalImg = "childImageSharp___fluid___originalImg",
  childImageSharp___fluid___originalName = "childImageSharp___fluid___originalName",
  childImageSharp___fluid___presentationWidth = "childImageSharp___fluid___presentationWidth",
  childImageSharp___fluid___presentationHeight = "childImageSharp___fluid___presentationHeight",
  childImageSharp___gatsbyImageData = "childImageSharp___gatsbyImageData",
  childImageSharp___original___width = "childImageSharp___original___width",
  childImageSharp___original___height = "childImageSharp___original___height",
  childImageSharp___original___src = "childImageSharp___original___src",
  childImageSharp___resize___src = "childImageSharp___resize___src",
  childImageSharp___resize___tracedSVG = "childImageSharp___resize___tracedSVG",
  childImageSharp___resize___width = "childImageSharp___resize___width",
  childImageSharp___resize___height = "childImageSharp___resize___height",
  childImageSharp___resize___aspectRatio = "childImageSharp___resize___aspectRatio",
  childImageSharp___resize___originalName = "childImageSharp___resize___originalName",
  childImageSharp___id = "childImageSharp___id",
  childImageSharp___parent___id = "childImageSharp___parent___id",
  childImageSharp___parent___parent___id = "childImageSharp___parent___parent___id",
  childImageSharp___parent___parent___children = "childImageSharp___parent___parent___children",
  childImageSharp___parent___children = "childImageSharp___parent___children",
  childImageSharp___parent___children___id = "childImageSharp___parent___children___id",
  childImageSharp___parent___children___children = "childImageSharp___parent___children___children",
  childImageSharp___parent___internal___content = "childImageSharp___parent___internal___content",
  childImageSharp___parent___internal___contentDigest = "childImageSharp___parent___internal___contentDigest",
  childImageSharp___parent___internal___description = "childImageSharp___parent___internal___description",
  childImageSharp___parent___internal___fieldOwners = "childImageSharp___parent___internal___fieldOwners",
  childImageSharp___parent___internal___ignoreType = "childImageSharp___parent___internal___ignoreType",
  childImageSharp___parent___internal___mediaType = "childImageSharp___parent___internal___mediaType",
  childImageSharp___parent___internal___owner = "childImageSharp___parent___internal___owner",
  childImageSharp___parent___internal___type = "childImageSharp___parent___internal___type",
  childImageSharp___children = "childImageSharp___children",
  childImageSharp___children___id = "childImageSharp___children___id",
  childImageSharp___children___parent___id = "childImageSharp___children___parent___id",
  childImageSharp___children___parent___children = "childImageSharp___children___parent___children",
  childImageSharp___children___children = "childImageSharp___children___children",
  childImageSharp___children___children___id = "childImageSharp___children___children___id",
  childImageSharp___children___children___children = "childImageSharp___children___children___children",
  childImageSharp___children___internal___content = "childImageSharp___children___internal___content",
  childImageSharp___children___internal___contentDigest = "childImageSharp___children___internal___contentDigest",
  childImageSharp___children___internal___description = "childImageSharp___children___internal___description",
  childImageSharp___children___internal___fieldOwners = "childImageSharp___children___internal___fieldOwners",
  childImageSharp___children___internal___ignoreType = "childImageSharp___children___internal___ignoreType",
  childImageSharp___children___internal___mediaType = "childImageSharp___children___internal___mediaType",
  childImageSharp___children___internal___owner = "childImageSharp___children___internal___owner",
  childImageSharp___children___internal___type = "childImageSharp___children___internal___type",
  childImageSharp___internal___content = "childImageSharp___internal___content",
  childImageSharp___internal___contentDigest = "childImageSharp___internal___contentDigest",
  childImageSharp___internal___description = "childImageSharp___internal___description",
  childImageSharp___internal___fieldOwners = "childImageSharp___internal___fieldOwners",
  childImageSharp___internal___ignoreType = "childImageSharp___internal___ignoreType",
  childImageSharp___internal___mediaType = "childImageSharp___internal___mediaType",
  childImageSharp___internal___owner = "childImageSharp___internal___owner",
  childImageSharp___internal___type = "childImageSharp___internal___type",
  childrenMarkdownRemark = "childrenMarkdownRemark",
  childrenMarkdownRemark___id = "childrenMarkdownRemark___id",
  childrenMarkdownRemark___frontmatter___title = "childrenMarkdownRemark___frontmatter___title",
  childrenMarkdownRemark___frontmatter___description = "childrenMarkdownRemark___frontmatter___description",
  childrenMarkdownRemark___frontmatter___date = "childrenMarkdownRemark___frontmatter___date",
  childrenMarkdownRemark___frontmatter___template = "childrenMarkdownRemark___frontmatter___template",
  childrenMarkdownRemark___frontmatter___tags = "childrenMarkdownRemark___frontmatter___tags",
  childrenMarkdownRemark___frontmatter___profile_image___sourceInstanceName = "childrenMarkdownRemark___frontmatter___profile_image___sourceInstanceName",
  childrenMarkdownRemark___frontmatter___profile_image___absolutePath = "childrenMarkdownRemark___frontmatter___profile_image___absolutePath",
  childrenMarkdownRemark___frontmatter___profile_image___relativePath = "childrenMarkdownRemark___frontmatter___profile_image___relativePath",
  childrenMarkdownRemark___frontmatter___profile_image___extension = "childrenMarkdownRemark___frontmatter___profile_image___extension",
  childrenMarkdownRemark___frontmatter___profile_image___size = "childrenMarkdownRemark___frontmatter___profile_image___size",
  childrenMarkdownRemark___frontmatter___profile_image___prettySize = "childrenMarkdownRemark___frontmatter___profile_image___prettySize",
  childrenMarkdownRemark___frontmatter___profile_image___modifiedTime = "childrenMarkdownRemark___frontmatter___profile_image___modifiedTime",
  childrenMarkdownRemark___frontmatter___profile_image___accessTime = "childrenMarkdownRemark___frontmatter___profile_image___accessTime",
  childrenMarkdownRemark___frontmatter___profile_image___changeTime = "childrenMarkdownRemark___frontmatter___profile_image___changeTime",
  childrenMarkdownRemark___frontmatter___profile_image___birthTime = "childrenMarkdownRemark___frontmatter___profile_image___birthTime",
  childrenMarkdownRemark___frontmatter___profile_image___root = "childrenMarkdownRemark___frontmatter___profile_image___root",
  childrenMarkdownRemark___frontmatter___profile_image___dir = "childrenMarkdownRemark___frontmatter___profile_image___dir",
  childrenMarkdownRemark___frontmatter___profile_image___base = "childrenMarkdownRemark___frontmatter___profile_image___base",
  childrenMarkdownRemark___frontmatter___profile_image___ext = "childrenMarkdownRemark___frontmatter___profile_image___ext",
  childrenMarkdownRemark___frontmatter___profile_image___name = "childrenMarkdownRemark___frontmatter___profile_image___name",
  childrenMarkdownRemark___frontmatter___profile_image___relativeDirectory = "childrenMarkdownRemark___frontmatter___profile_image___relativeDirectory",
  childrenMarkdownRemark___frontmatter___profile_image___dev = "childrenMarkdownRemark___frontmatter___profile_image___dev",
  childrenMarkdownRemark___frontmatter___profile_image___mode = "childrenMarkdownRemark___frontmatter___profile_image___mode",
  childrenMarkdownRemark___frontmatter___profile_image___nlink = "childrenMarkdownRemark___frontmatter___profile_image___nlink",
  childrenMarkdownRemark___frontmatter___profile_image___uid = "childrenMarkdownRemark___frontmatter___profile_image___uid",
  childrenMarkdownRemark___frontmatter___profile_image___gid = "childrenMarkdownRemark___frontmatter___profile_image___gid",
  childrenMarkdownRemark___frontmatter___profile_image___rdev = "childrenMarkdownRemark___frontmatter___profile_image___rdev",
  childrenMarkdownRemark___frontmatter___profile_image___ino = "childrenMarkdownRemark___frontmatter___profile_image___ino",
  childrenMarkdownRemark___frontmatter___profile_image___atimeMs = "childrenMarkdownRemark___frontmatter___profile_image___atimeMs",
  childrenMarkdownRemark___frontmatter___profile_image___mtimeMs = "childrenMarkdownRemark___frontmatter___profile_image___mtimeMs",
  childrenMarkdownRemark___frontmatter___profile_image___ctimeMs = "childrenMarkdownRemark___frontmatter___profile_image___ctimeMs",
  childrenMarkdownRemark___frontmatter___profile_image___atime = "childrenMarkdownRemark___frontmatter___profile_image___atime",
  childrenMarkdownRemark___frontmatter___profile_image___mtime = "childrenMarkdownRemark___frontmatter___profile_image___mtime",
  childrenMarkdownRemark___frontmatter___profile_image___ctime = "childrenMarkdownRemark___frontmatter___profile_image___ctime",
  childrenMarkdownRemark___frontmatter___profile_image___birthtime = "childrenMarkdownRemark___frontmatter___profile_image___birthtime",
  childrenMarkdownRemark___frontmatter___profile_image___birthtimeMs = "childrenMarkdownRemark___frontmatter___profile_image___birthtimeMs",
  childrenMarkdownRemark___frontmatter___profile_image___blksize = "childrenMarkdownRemark___frontmatter___profile_image___blksize",
  childrenMarkdownRemark___frontmatter___profile_image___blocks = "childrenMarkdownRemark___frontmatter___profile_image___blocks",
  childrenMarkdownRemark___frontmatter___profile_image___publicURL = "childrenMarkdownRemark___frontmatter___profile_image___publicURL",
  childrenMarkdownRemark___frontmatter___profile_image___childrenImageSharp = "childrenMarkdownRemark___frontmatter___profile_image___childrenImageSharp",
  childrenMarkdownRemark___frontmatter___profile_image___childrenMarkdownRemark = "childrenMarkdownRemark___frontmatter___profile_image___childrenMarkdownRemark",
  childrenMarkdownRemark___frontmatter___profile_image___id = "childrenMarkdownRemark___frontmatter___profile_image___id",
  childrenMarkdownRemark___frontmatter___profile_image___children = "childrenMarkdownRemark___frontmatter___profile_image___children",
  childrenMarkdownRemark___fields___slug = "childrenMarkdownRemark___fields___slug",
  childrenMarkdownRemark___fields___contentType = "childrenMarkdownRemark___fields___contentType",
  childrenMarkdownRemark___excerpt = "childrenMarkdownRemark___excerpt",
  childrenMarkdownRemark___rawMarkdownBody = "childrenMarkdownRemark___rawMarkdownBody",
  childrenMarkdownRemark___fileAbsolutePath = "childrenMarkdownRemark___fileAbsolutePath",
  childrenMarkdownRemark___html = "childrenMarkdownRemark___html",
  childrenMarkdownRemark___htmlAst = "childrenMarkdownRemark___htmlAst",
  childrenMarkdownRemark___excerptAst = "childrenMarkdownRemark___excerptAst",
  childrenMarkdownRemark___headings = "childrenMarkdownRemark___headings",
  childrenMarkdownRemark___headings___id = "childrenMarkdownRemark___headings___id",
  childrenMarkdownRemark___headings___value = "childrenMarkdownRemark___headings___value",
  childrenMarkdownRemark___headings___depth = "childrenMarkdownRemark___headings___depth",
  childrenMarkdownRemark___timeToRead = "childrenMarkdownRemark___timeToRead",
  childrenMarkdownRemark___tableOfContents = "childrenMarkdownRemark___tableOfContents",
  childrenMarkdownRemark___wordCount___paragraphs = "childrenMarkdownRemark___wordCount___paragraphs",
  childrenMarkdownRemark___wordCount___sentences = "childrenMarkdownRemark___wordCount___sentences",
  childrenMarkdownRemark___wordCount___words = "childrenMarkdownRemark___wordCount___words",
  childrenMarkdownRemark___parent___id = "childrenMarkdownRemark___parent___id",
  childrenMarkdownRemark___parent___parent___id = "childrenMarkdownRemark___parent___parent___id",
  childrenMarkdownRemark___parent___parent___children = "childrenMarkdownRemark___parent___parent___children",
  childrenMarkdownRemark___parent___children = "childrenMarkdownRemark___parent___children",
  childrenMarkdownRemark___parent___children___id = "childrenMarkdownRemark___parent___children___id",
  childrenMarkdownRemark___parent___children___children = "childrenMarkdownRemark___parent___children___children",
  childrenMarkdownRemark___parent___internal___content = "childrenMarkdownRemark___parent___internal___content",
  childrenMarkdownRemark___parent___internal___contentDigest = "childrenMarkdownRemark___parent___internal___contentDigest",
  childrenMarkdownRemark___parent___internal___description = "childrenMarkdownRemark___parent___internal___description",
  childrenMarkdownRemark___parent___internal___fieldOwners = "childrenMarkdownRemark___parent___internal___fieldOwners",
  childrenMarkdownRemark___parent___internal___ignoreType = "childrenMarkdownRemark___parent___internal___ignoreType",
  childrenMarkdownRemark___parent___internal___mediaType = "childrenMarkdownRemark___parent___internal___mediaType",
  childrenMarkdownRemark___parent___internal___owner = "childrenMarkdownRemark___parent___internal___owner",
  childrenMarkdownRemark___parent___internal___type = "childrenMarkdownRemark___parent___internal___type",
  childrenMarkdownRemark___children = "childrenMarkdownRemark___children",
  childrenMarkdownRemark___children___id = "childrenMarkdownRemark___children___id",
  childrenMarkdownRemark___children___parent___id = "childrenMarkdownRemark___children___parent___id",
  childrenMarkdownRemark___children___parent___children = "childrenMarkdownRemark___children___parent___children",
  childrenMarkdownRemark___children___children = "childrenMarkdownRemark___children___children",
  childrenMarkdownRemark___children___children___id = "childrenMarkdownRemark___children___children___id",
  childrenMarkdownRemark___children___children___children = "childrenMarkdownRemark___children___children___children",
  childrenMarkdownRemark___children___internal___content = "childrenMarkdownRemark___children___internal___content",
  childrenMarkdownRemark___children___internal___contentDigest = "childrenMarkdownRemark___children___internal___contentDigest",
  childrenMarkdownRemark___children___internal___description = "childrenMarkdownRemark___children___internal___description",
  childrenMarkdownRemark___children___internal___fieldOwners = "childrenMarkdownRemark___children___internal___fieldOwners",
  childrenMarkdownRemark___children___internal___ignoreType = "childrenMarkdownRemark___children___internal___ignoreType",
  childrenMarkdownRemark___children___internal___mediaType = "childrenMarkdownRemark___children___internal___mediaType",
  childrenMarkdownRemark___children___internal___owner = "childrenMarkdownRemark___children___internal___owner",
  childrenMarkdownRemark___children___internal___type = "childrenMarkdownRemark___children___internal___type",
  childrenMarkdownRemark___internal___content = "childrenMarkdownRemark___internal___content",
  childrenMarkdownRemark___internal___contentDigest = "childrenMarkdownRemark___internal___contentDigest",
  childrenMarkdownRemark___internal___description = "childrenMarkdownRemark___internal___description",
  childrenMarkdownRemark___internal___fieldOwners = "childrenMarkdownRemark___internal___fieldOwners",
  childrenMarkdownRemark___internal___ignoreType = "childrenMarkdownRemark___internal___ignoreType",
  childrenMarkdownRemark___internal___mediaType = "childrenMarkdownRemark___internal___mediaType",
  childrenMarkdownRemark___internal___owner = "childrenMarkdownRemark___internal___owner",
  childrenMarkdownRemark___internal___type = "childrenMarkdownRemark___internal___type",
  childMarkdownRemark___id = "childMarkdownRemark___id",
  childMarkdownRemark___frontmatter___title = "childMarkdownRemark___frontmatter___title",
  childMarkdownRemark___frontmatter___description = "childMarkdownRemark___frontmatter___description",
  childMarkdownRemark___frontmatter___date = "childMarkdownRemark___frontmatter___date",
  childMarkdownRemark___frontmatter___template = "childMarkdownRemark___frontmatter___template",
  childMarkdownRemark___frontmatter___tags = "childMarkdownRemark___frontmatter___tags",
  childMarkdownRemark___frontmatter___profile_image___sourceInstanceName = "childMarkdownRemark___frontmatter___profile_image___sourceInstanceName",
  childMarkdownRemark___frontmatter___profile_image___absolutePath = "childMarkdownRemark___frontmatter___profile_image___absolutePath",
  childMarkdownRemark___frontmatter___profile_image___relativePath = "childMarkdownRemark___frontmatter___profile_image___relativePath",
  childMarkdownRemark___frontmatter___profile_image___extension = "childMarkdownRemark___frontmatter___profile_image___extension",
  childMarkdownRemark___frontmatter___profile_image___size = "childMarkdownRemark___frontmatter___profile_image___size",
  childMarkdownRemark___frontmatter___profile_image___prettySize = "childMarkdownRemark___frontmatter___profile_image___prettySize",
  childMarkdownRemark___frontmatter___profile_image___modifiedTime = "childMarkdownRemark___frontmatter___profile_image___modifiedTime",
  childMarkdownRemark___frontmatter___profile_image___accessTime = "childMarkdownRemark___frontmatter___profile_image___accessTime",
  childMarkdownRemark___frontmatter___profile_image___changeTime = "childMarkdownRemark___frontmatter___profile_image___changeTime",
  childMarkdownRemark___frontmatter___profile_image___birthTime = "childMarkdownRemark___frontmatter___profile_image___birthTime",
  childMarkdownRemark___frontmatter___profile_image___root = "childMarkdownRemark___frontmatter___profile_image___root",
  childMarkdownRemark___frontmatter___profile_image___dir = "childMarkdownRemark___frontmatter___profile_image___dir",
  childMarkdownRemark___frontmatter___profile_image___base = "childMarkdownRemark___frontmatter___profile_image___base",
  childMarkdownRemark___frontmatter___profile_image___ext = "childMarkdownRemark___frontmatter___profile_image___ext",
  childMarkdownRemark___frontmatter___profile_image___name = "childMarkdownRemark___frontmatter___profile_image___name",
  childMarkdownRemark___frontmatter___profile_image___relativeDirectory = "childMarkdownRemark___frontmatter___profile_image___relativeDirectory",
  childMarkdownRemark___frontmatter___profile_image___dev = "childMarkdownRemark___frontmatter___profile_image___dev",
  childMarkdownRemark___frontmatter___profile_image___mode = "childMarkdownRemark___frontmatter___profile_image___mode",
  childMarkdownRemark___frontmatter___profile_image___nlink = "childMarkdownRemark___frontmatter___profile_image___nlink",
  childMarkdownRemark___frontmatter___profile_image___uid = "childMarkdownRemark___frontmatter___profile_image___uid",
  childMarkdownRemark___frontmatter___profile_image___gid = "childMarkdownRemark___frontmatter___profile_image___gid",
  childMarkdownRemark___frontmatter___profile_image___rdev = "childMarkdownRemark___frontmatter___profile_image___rdev",
  childMarkdownRemark___frontmatter___profile_image___ino = "childMarkdownRemark___frontmatter___profile_image___ino",
  childMarkdownRemark___frontmatter___profile_image___atimeMs = "childMarkdownRemark___frontmatter___profile_image___atimeMs",
  childMarkdownRemark___frontmatter___profile_image___mtimeMs = "childMarkdownRemark___frontmatter___profile_image___mtimeMs",
  childMarkdownRemark___frontmatter___profile_image___ctimeMs = "childMarkdownRemark___frontmatter___profile_image___ctimeMs",
  childMarkdownRemark___frontmatter___profile_image___atime = "childMarkdownRemark___frontmatter___profile_image___atime",
  childMarkdownRemark___frontmatter___profile_image___mtime = "childMarkdownRemark___frontmatter___profile_image___mtime",
  childMarkdownRemark___frontmatter___profile_image___ctime = "childMarkdownRemark___frontmatter___profile_image___ctime",
  childMarkdownRemark___frontmatter___profile_image___birthtime = "childMarkdownRemark___frontmatter___profile_image___birthtime",
  childMarkdownRemark___frontmatter___profile_image___birthtimeMs = "childMarkdownRemark___frontmatter___profile_image___birthtimeMs",
  childMarkdownRemark___frontmatter___profile_image___blksize = "childMarkdownRemark___frontmatter___profile_image___blksize",
  childMarkdownRemark___frontmatter___profile_image___blocks = "childMarkdownRemark___frontmatter___profile_image___blocks",
  childMarkdownRemark___frontmatter___profile_image___publicURL = "childMarkdownRemark___frontmatter___profile_image___publicURL",
  childMarkdownRemark___frontmatter___profile_image___childrenImageSharp = "childMarkdownRemark___frontmatter___profile_image___childrenImageSharp",
  childMarkdownRemark___frontmatter___profile_image___childrenMarkdownRemark = "childMarkdownRemark___frontmatter___profile_image___childrenMarkdownRemark",
  childMarkdownRemark___frontmatter___profile_image___id = "childMarkdownRemark___frontmatter___profile_image___id",
  childMarkdownRemark___frontmatter___profile_image___children = "childMarkdownRemark___frontmatter___profile_image___children",
  childMarkdownRemark___fields___slug = "childMarkdownRemark___fields___slug",
  childMarkdownRemark___fields___contentType = "childMarkdownRemark___fields___contentType",
  childMarkdownRemark___excerpt = "childMarkdownRemark___excerpt",
  childMarkdownRemark___rawMarkdownBody = "childMarkdownRemark___rawMarkdownBody",
  childMarkdownRemark___fileAbsolutePath = "childMarkdownRemark___fileAbsolutePath",
  childMarkdownRemark___html = "childMarkdownRemark___html",
  childMarkdownRemark___htmlAst = "childMarkdownRemark___htmlAst",
  childMarkdownRemark___excerptAst = "childMarkdownRemark___excerptAst",
  childMarkdownRemark___headings = "childMarkdownRemark___headings",
  childMarkdownRemark___headings___id = "childMarkdownRemark___headings___id",
  childMarkdownRemark___headings___value = "childMarkdownRemark___headings___value",
  childMarkdownRemark___headings___depth = "childMarkdownRemark___headings___depth",
  childMarkdownRemark___timeToRead = "childMarkdownRemark___timeToRead",
  childMarkdownRemark___tableOfContents = "childMarkdownRemark___tableOfContents",
  childMarkdownRemark___wordCount___paragraphs = "childMarkdownRemark___wordCount___paragraphs",
  childMarkdownRemark___wordCount___sentences = "childMarkdownRemark___wordCount___sentences",
  childMarkdownRemark___wordCount___words = "childMarkdownRemark___wordCount___words",
  childMarkdownRemark___parent___id = "childMarkdownRemark___parent___id",
  childMarkdownRemark___parent___parent___id = "childMarkdownRemark___parent___parent___id",
  childMarkdownRemark___parent___parent___children = "childMarkdownRemark___parent___parent___children",
  childMarkdownRemark___parent___children = "childMarkdownRemark___parent___children",
  childMarkdownRemark___parent___children___id = "childMarkdownRemark___parent___children___id",
  childMarkdownRemark___parent___children___children = "childMarkdownRemark___parent___children___children",
  childMarkdownRemark___parent___internal___content = "childMarkdownRemark___parent___internal___content",
  childMarkdownRemark___parent___internal___contentDigest = "childMarkdownRemark___parent___internal___contentDigest",
  childMarkdownRemark___parent___internal___description = "childMarkdownRemark___parent___internal___description",
  childMarkdownRemark___parent___internal___fieldOwners = "childMarkdownRemark___parent___internal___fieldOwners",
  childMarkdownRemark___parent___internal___ignoreType = "childMarkdownRemark___parent___internal___ignoreType",
  childMarkdownRemark___parent___internal___mediaType = "childMarkdownRemark___parent___internal___mediaType",
  childMarkdownRemark___parent___internal___owner = "childMarkdownRemark___parent___internal___owner",
  childMarkdownRemark___parent___internal___type = "childMarkdownRemark___parent___internal___type",
  childMarkdownRemark___children = "childMarkdownRemark___children",
  childMarkdownRemark___children___id = "childMarkdownRemark___children___id",
  childMarkdownRemark___children___parent___id = "childMarkdownRemark___children___parent___id",
  childMarkdownRemark___children___parent___children = "childMarkdownRemark___children___parent___children",
  childMarkdownRemark___children___children = "childMarkdownRemark___children___children",
  childMarkdownRemark___children___children___id = "childMarkdownRemark___children___children___id",
  childMarkdownRemark___children___children___children = "childMarkdownRemark___children___children___children",
  childMarkdownRemark___children___internal___content = "childMarkdownRemark___children___internal___content",
  childMarkdownRemark___children___internal___contentDigest = "childMarkdownRemark___children___internal___contentDigest",
  childMarkdownRemark___children___internal___description = "childMarkdownRemark___children___internal___description",
  childMarkdownRemark___children___internal___fieldOwners = "childMarkdownRemark___children___internal___fieldOwners",
  childMarkdownRemark___children___internal___ignoreType = "childMarkdownRemark___children___internal___ignoreType",
  childMarkdownRemark___children___internal___mediaType = "childMarkdownRemark___children___internal___mediaType",
  childMarkdownRemark___children___internal___owner = "childMarkdownRemark___children___internal___owner",
  childMarkdownRemark___children___internal___type = "childMarkdownRemark___children___internal___type",
  childMarkdownRemark___internal___content = "childMarkdownRemark___internal___content",
  childMarkdownRemark___internal___contentDigest = "childMarkdownRemark___internal___contentDigest",
  childMarkdownRemark___internal___description = "childMarkdownRemark___internal___description",
  childMarkdownRemark___internal___fieldOwners = "childMarkdownRemark___internal___fieldOwners",
  childMarkdownRemark___internal___ignoreType = "childMarkdownRemark___internal___ignoreType",
  childMarkdownRemark___internal___mediaType = "childMarkdownRemark___internal___mediaType",
  childMarkdownRemark___internal___owner = "childMarkdownRemark___internal___owner",
  childMarkdownRemark___internal___type = "childMarkdownRemark___internal___type",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>
  childImageSharp?: Maybe<ImageSharpFilterInput>
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type FileGroupConnection = {
  __typename?: "FileGroupConnection"
  totalCount: Scalars["Int"]
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars["Float"]>
  ne?: Maybe<Scalars["Float"]>
  gt?: Maybe<Scalars["Float"]>
  gte?: Maybe<Scalars["Float"]>
  lt?: Maybe<Scalars["Float"]>
  lte?: Maybe<Scalars["Float"]>
  in?: Maybe<Array<Maybe<Scalars["Float"]>>>
  nin?: Maybe<Array<Maybe<Scalars["Float"]>>>
}

export type Frontmatter = {
  __typename?: "Frontmatter"
  title?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  date?: Maybe<Scalars["Date"]>
  template?: Maybe<Scalars["String"]>
  tags?: Maybe<Array<Scalars["String"]>>
  profile_image?: Maybe<File>
}

export type FrontmatterDateArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type FrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  date?: Maybe<DateQueryOperatorInput>
  template?: Maybe<StringQueryOperatorInput>
  tags?: Maybe<StringQueryOperatorInput>
  profile_image?: Maybe<FileFilterInput>
}

export enum ImageCropFocus {
  CENTER = "CENTER",
  NORTH = "NORTH",
  NORTHEAST = "NORTHEAST",
  EAST = "EAST",
  SOUTHEAST = "SOUTHEAST",
  SOUTH = "SOUTH",
  SOUTHWEST = "SOUTHWEST",
  WEST = "WEST",
  NORTHWEST = "NORTHWEST",
  ENTROPY = "ENTROPY",
  ATTENTION = "ATTENTION",
}

export enum ImageFit {
  COVER = "COVER",
  CONTAIN = "CONTAIN",
  FILL = "FILL",
  INSIDE = "INSIDE",
  OUTSIDE = "OUTSIDE",
}

export enum ImageFormat {
  NO_CHANGE = "NO_CHANGE",
  AUTO = "AUTO",
  JPG = "JPG",
  PNG = "PNG",
  WEBP = "WEBP",
  AVIF = "AVIF",
}

export enum ImageLayout {
  FIXED = "FIXED",
  FULL_WIDTH = "FULL_WIDTH",
  CONSTRAINED = "CONSTRAINED",
}

export enum ImagePlaceholder {
  DOMINANT_COLOR = "DOMINANT_COLOR",
  TRACED_SVG = "TRACED_SVG",
  BLURRED = "BLURRED",
  NONE = "NONE",
}

export type ImageSharp = Node & {
  __typename?: "ImageSharp"
  fixed?: Maybe<ImageSharpFixed>
  fluid?: Maybe<ImageSharpFluid>
  gatsbyImageData: Scalars["JSON"]
  original?: Maybe<ImageSharpOriginal>
  resize?: Maybe<ImageSharpResize>
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars["Int"]>
  height?: Maybe<Scalars["Int"]>
  base64Width?: Maybe<Scalars["Int"]>
  jpegProgressive?: Maybe<Scalars["Boolean"]>
  pngCompressionSpeed?: Maybe<Scalars["Int"]>
  grayscale?: Maybe<Scalars["Boolean"]>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars["Int"]>
  jpegQuality?: Maybe<Scalars["Int"]>
  pngQuality?: Maybe<Scalars["Int"]>
  webpQuality?: Maybe<Scalars["Int"]>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars["String"]>
  rotate?: Maybe<Scalars["Int"]>
  trim?: Maybe<Scalars["Float"]>
}

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars["Int"]>
  maxHeight?: Maybe<Scalars["Int"]>
  base64Width?: Maybe<Scalars["Int"]>
  grayscale?: Maybe<Scalars["Boolean"]>
  jpegProgressive?: Maybe<Scalars["Boolean"]>
  pngCompressionSpeed?: Maybe<Scalars["Int"]>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars["Int"]>
  jpegQuality?: Maybe<Scalars["Int"]>
  pngQuality?: Maybe<Scalars["Int"]>
  webpQuality?: Maybe<Scalars["Int"]>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars["String"]>
  rotate?: Maybe<Scalars["Int"]>
  trim?: Maybe<Scalars["Float"]>
  sizes?: Maybe<Scalars["String"]>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
}

export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>
  width?: Maybe<Scalars["Int"]>
  height?: Maybe<Scalars["Int"]>
  aspectRatio?: Maybe<Scalars["Float"]>
  placeholder?: Maybe<ImagePlaceholder>
  blurredOptions?: Maybe<BlurredOptions>
  tracedSVGOptions?: Maybe<Potrace>
  formats?: Maybe<Array<Maybe<ImageFormat>>>
  outputPixelDensities?: Maybe<Array<Maybe<Scalars["Float"]>>>
  breakpoints?: Maybe<Array<Maybe<Scalars["Int"]>>>
  sizes?: Maybe<Scalars["String"]>
  quality?: Maybe<Scalars["Int"]>
  jpgOptions?: Maybe<JpgOptions>
  pngOptions?: Maybe<PngOptions>
  webpOptions?: Maybe<WebPOptions>
  avifOptions?: Maybe<AvifOptions>
  transformOptions?: Maybe<TransformOptions>
  backgroundColor?: Maybe<Scalars["String"]>
}

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars["Int"]>
  height?: Maybe<Scalars["Int"]>
  quality?: Maybe<Scalars["Int"]>
  jpegQuality?: Maybe<Scalars["Int"]>
  pngQuality?: Maybe<Scalars["Int"]>
  webpQuality?: Maybe<Scalars["Int"]>
  jpegProgressive?: Maybe<Scalars["Boolean"]>
  pngCompressionLevel?: Maybe<Scalars["Int"]>
  pngCompressionSpeed?: Maybe<Scalars["Int"]>
  grayscale?: Maybe<Scalars["Boolean"]>
  duotone?: Maybe<DuotoneGradient>
  base64?: Maybe<Scalars["Boolean"]>
  traceSVG?: Maybe<Potrace>
  toFormat?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars["String"]>
  rotate?: Maybe<Scalars["Int"]>
  trim?: Maybe<Scalars["Float"]>
}

export type ImageSharpConnection = {
  __typename?: "ImageSharpConnection"
  totalCount: Scalars["Int"]
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<ImageSharpGroupConnection>
}

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: ImageSharpFieldsEnum
}

export type ImageSharpEdge = {
  __typename?: "ImageSharpEdge"
  next?: Maybe<ImageSharp>
  node: ImageSharp
  previous?: Maybe<ImageSharp>
}

export enum ImageSharpFieldsEnum {
  fixed___base64 = "fixed___base64",
  fixed___tracedSVG = "fixed___tracedSVG",
  fixed___aspectRatio = "fixed___aspectRatio",
  fixed___width = "fixed___width",
  fixed___height = "fixed___height",
  fixed___src = "fixed___src",
  fixed___srcSet = "fixed___srcSet",
  fixed___srcWebp = "fixed___srcWebp",
  fixed___srcSetWebp = "fixed___srcSetWebp",
  fixed___originalName = "fixed___originalName",
  fluid___base64 = "fluid___base64",
  fluid___tracedSVG = "fluid___tracedSVG",
  fluid___aspectRatio = "fluid___aspectRatio",
  fluid___src = "fluid___src",
  fluid___srcSet = "fluid___srcSet",
  fluid___srcWebp = "fluid___srcWebp",
  fluid___srcSetWebp = "fluid___srcSetWebp",
  fluid___sizes = "fluid___sizes",
  fluid___originalImg = "fluid___originalImg",
  fluid___originalName = "fluid___originalName",
  fluid___presentationWidth = "fluid___presentationWidth",
  fluid___presentationHeight = "fluid___presentationHeight",
  gatsbyImageData = "gatsbyImageData",
  original___width = "original___width",
  original___height = "original___height",
  original___src = "original___src",
  resize___src = "resize___src",
  resize___tracedSVG = "resize___tracedSVG",
  resize___width = "resize___width",
  resize___height = "resize___height",
  resize___aspectRatio = "resize___aspectRatio",
  resize___originalName = "resize___originalName",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>
}

export type ImageSharpFixed = {
  __typename?: "ImageSharpFixed"
  base64?: Maybe<Scalars["String"]>
  tracedSVG?: Maybe<Scalars["String"]>
  aspectRatio?: Maybe<Scalars["Float"]>
  width: Scalars["Float"]
  height: Scalars["Float"]
  src: Scalars["String"]
  srcSet: Scalars["String"]
  srcWebp?: Maybe<Scalars["String"]>
  srcSetWebp?: Maybe<Scalars["String"]>
  originalName?: Maybe<Scalars["String"]>
}

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpFluid = {
  __typename?: "ImageSharpFluid"
  base64?: Maybe<Scalars["String"]>
  tracedSVG?: Maybe<Scalars["String"]>
  aspectRatio: Scalars["Float"]
  src: Scalars["String"]
  srcSet: Scalars["String"]
  srcWebp?: Maybe<Scalars["String"]>
  srcSetWebp?: Maybe<Scalars["String"]>
  sizes: Scalars["String"]
  originalImg?: Maybe<Scalars["String"]>
  originalName?: Maybe<Scalars["String"]>
  presentationWidth: Scalars["Int"]
  presentationHeight: Scalars["Int"]
}

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  originalImg?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  presentationWidth?: Maybe<IntQueryOperatorInput>
  presentationHeight?: Maybe<IntQueryOperatorInput>
}

export type ImageSharpGroupConnection = {
  __typename?: "ImageSharpGroupConnection"
  totalCount: Scalars["Int"]
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type ImageSharpOriginal = {
  __typename?: "ImageSharpOriginal"
  width?: Maybe<Scalars["Float"]>
  height?: Maybe<Scalars["Float"]>
  src?: Maybe<Scalars["String"]>
}

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpResize = {
  __typename?: "ImageSharpResize"
  src?: Maybe<Scalars["String"]>
  tracedSVG?: Maybe<Scalars["String"]>
  width?: Maybe<Scalars["Int"]>
  height?: Maybe<Scalars["Int"]>
  aspectRatio?: Maybe<Scalars["Float"]>
  originalName?: Maybe<Scalars["String"]>
}

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars["Int"]>
  ne?: Maybe<Scalars["Int"]>
  gt?: Maybe<Scalars["Int"]>
  gte?: Maybe<Scalars["Int"]>
  lt?: Maybe<Scalars["Int"]>
  lte?: Maybe<Scalars["Int"]>
  in?: Maybe<Array<Maybe<Scalars["Int"]>>>
  nin?: Maybe<Array<Maybe<Scalars["Int"]>>>
}

export type Internal = {
  __typename?: "Internal"
  content?: Maybe<Scalars["String"]>
  contentDigest: Scalars["String"]
  description?: Maybe<Scalars["String"]>
  fieldOwners?: Maybe<Array<Maybe<Scalars["String"]>>>
  ignoreType?: Maybe<Scalars["Boolean"]>
  mediaType?: Maybe<Scalars["String"]>
  owner: Scalars["String"]
  type: Scalars["String"]
}

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>
  contentDigest?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  fieldOwners?: Maybe<StringQueryOperatorInput>
  ignoreType?: Maybe<BooleanQueryOperatorInput>
  mediaType?: Maybe<StringQueryOperatorInput>
  owner?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
}

export type JpgOptions = {
  quality?: Maybe<Scalars["Int"]>
  progressive?: Maybe<Scalars["Boolean"]>
}

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars["JSON"]>
  ne?: Maybe<Scalars["JSON"]>
  in?: Maybe<Array<Maybe<Scalars["JSON"]>>>
  nin?: Maybe<Array<Maybe<Scalars["JSON"]>>>
  regex?: Maybe<Scalars["JSON"]>
  glob?: Maybe<Scalars["JSON"]>
}

export enum MarkdownExcerptFormats {
  PLAIN = "PLAIN",
  HTML = "HTML",
  MARKDOWN = "MARKDOWN",
}

export type MarkdownHeading = {
  __typename?: "MarkdownHeading"
  id?: Maybe<Scalars["String"]>
  value?: Maybe<Scalars["String"]>
  depth?: Maybe<Scalars["Int"]>
}

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  value?: Maybe<StringQueryOperatorInput>
  depth?: Maybe<IntQueryOperatorInput>
}

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>
}

export enum MarkdownHeadingLevels {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
}

export type MarkdownRemark = Node & {
  __typename?: "MarkdownRemark"
  id: Scalars["ID"]
  frontmatter?: Maybe<Frontmatter>
  fields?: Maybe<Fields>
  excerpt?: Maybe<Scalars["String"]>
  rawMarkdownBody?: Maybe<Scalars["String"]>
  fileAbsolutePath?: Maybe<Scalars["String"]>
  html?: Maybe<Scalars["String"]>
  htmlAst?: Maybe<Scalars["JSON"]>
  excerptAst?: Maybe<Scalars["JSON"]>
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>
  timeToRead?: Maybe<Scalars["Int"]>
  tableOfContents?: Maybe<Scalars["String"]>
  wordCount?: Maybe<MarkdownWordCount>
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars["Int"]>
  truncate?: Maybe<Scalars["Boolean"]>
  format?: Maybe<MarkdownExcerptFormats>
}

export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars["Int"]>
  truncate?: Maybe<Scalars["Boolean"]>
}

export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>
}

export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars["Boolean"]>
  pathToSlugField?: Maybe<Scalars["String"]>
  maxDepth?: Maybe<Scalars["Int"]>
  heading?: Maybe<Scalars["String"]>
}

export type MarkdownRemarkConnection = {
  __typename?: "MarkdownRemarkConnection"
  totalCount: Scalars["Int"]
  edges: Array<MarkdownRemarkEdge>
  nodes: Array<MarkdownRemark>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<MarkdownRemarkGroupConnection>
}

export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkEdge = {
  __typename?: "MarkdownRemarkEdge"
  next?: Maybe<MarkdownRemark>
  node: MarkdownRemark
  previous?: Maybe<MarkdownRemark>
}

export enum MarkdownRemarkFieldsEnum {
  id = "id",
  frontmatter___title = "frontmatter___title",
  frontmatter___description = "frontmatter___description",
  frontmatter___date = "frontmatter___date",
  frontmatter___template = "frontmatter___template",
  frontmatter___tags = "frontmatter___tags",
  frontmatter___profile_image___sourceInstanceName = "frontmatter___profile_image___sourceInstanceName",
  frontmatter___profile_image___absolutePath = "frontmatter___profile_image___absolutePath",
  frontmatter___profile_image___relativePath = "frontmatter___profile_image___relativePath",
  frontmatter___profile_image___extension = "frontmatter___profile_image___extension",
  frontmatter___profile_image___size = "frontmatter___profile_image___size",
  frontmatter___profile_image___prettySize = "frontmatter___profile_image___prettySize",
  frontmatter___profile_image___modifiedTime = "frontmatter___profile_image___modifiedTime",
  frontmatter___profile_image___accessTime = "frontmatter___profile_image___accessTime",
  frontmatter___profile_image___changeTime = "frontmatter___profile_image___changeTime",
  frontmatter___profile_image___birthTime = "frontmatter___profile_image___birthTime",
  frontmatter___profile_image___root = "frontmatter___profile_image___root",
  frontmatter___profile_image___dir = "frontmatter___profile_image___dir",
  frontmatter___profile_image___base = "frontmatter___profile_image___base",
  frontmatter___profile_image___ext = "frontmatter___profile_image___ext",
  frontmatter___profile_image___name = "frontmatter___profile_image___name",
  frontmatter___profile_image___relativeDirectory = "frontmatter___profile_image___relativeDirectory",
  frontmatter___profile_image___dev = "frontmatter___profile_image___dev",
  frontmatter___profile_image___mode = "frontmatter___profile_image___mode",
  frontmatter___profile_image___nlink = "frontmatter___profile_image___nlink",
  frontmatter___profile_image___uid = "frontmatter___profile_image___uid",
  frontmatter___profile_image___gid = "frontmatter___profile_image___gid",
  frontmatter___profile_image___rdev = "frontmatter___profile_image___rdev",
  frontmatter___profile_image___ino = "frontmatter___profile_image___ino",
  frontmatter___profile_image___atimeMs = "frontmatter___profile_image___atimeMs",
  frontmatter___profile_image___mtimeMs = "frontmatter___profile_image___mtimeMs",
  frontmatter___profile_image___ctimeMs = "frontmatter___profile_image___ctimeMs",
  frontmatter___profile_image___atime = "frontmatter___profile_image___atime",
  frontmatter___profile_image___mtime = "frontmatter___profile_image___mtime",
  frontmatter___profile_image___ctime = "frontmatter___profile_image___ctime",
  frontmatter___profile_image___birthtime = "frontmatter___profile_image___birthtime",
  frontmatter___profile_image___birthtimeMs = "frontmatter___profile_image___birthtimeMs",
  frontmatter___profile_image___blksize = "frontmatter___profile_image___blksize",
  frontmatter___profile_image___blocks = "frontmatter___profile_image___blocks",
  frontmatter___profile_image___publicURL = "frontmatter___profile_image___publicURL",
  frontmatter___profile_image___childrenImageSharp = "frontmatter___profile_image___childrenImageSharp",
  frontmatter___profile_image___childrenImageSharp___gatsbyImageData = "frontmatter___profile_image___childrenImageSharp___gatsbyImageData",
  frontmatter___profile_image___childrenImageSharp___id = "frontmatter___profile_image___childrenImageSharp___id",
  frontmatter___profile_image___childrenImageSharp___children = "frontmatter___profile_image___childrenImageSharp___children",
  frontmatter___profile_image___childImageSharp___gatsbyImageData = "frontmatter___profile_image___childImageSharp___gatsbyImageData",
  frontmatter___profile_image___childImageSharp___id = "frontmatter___profile_image___childImageSharp___id",
  frontmatter___profile_image___childImageSharp___children = "frontmatter___profile_image___childImageSharp___children",
  frontmatter___profile_image___childrenMarkdownRemark = "frontmatter___profile_image___childrenMarkdownRemark",
  frontmatter___profile_image___childrenMarkdownRemark___id = "frontmatter___profile_image___childrenMarkdownRemark___id",
  frontmatter___profile_image___childrenMarkdownRemark___excerpt = "frontmatter___profile_image___childrenMarkdownRemark___excerpt",
  frontmatter___profile_image___childrenMarkdownRemark___rawMarkdownBody = "frontmatter___profile_image___childrenMarkdownRemark___rawMarkdownBody",
  frontmatter___profile_image___childrenMarkdownRemark___fileAbsolutePath = "frontmatter___profile_image___childrenMarkdownRemark___fileAbsolutePath",
  frontmatter___profile_image___childrenMarkdownRemark___html = "frontmatter___profile_image___childrenMarkdownRemark___html",
  frontmatter___profile_image___childrenMarkdownRemark___htmlAst = "frontmatter___profile_image___childrenMarkdownRemark___htmlAst",
  frontmatter___profile_image___childrenMarkdownRemark___excerptAst = "frontmatter___profile_image___childrenMarkdownRemark___excerptAst",
  frontmatter___profile_image___childrenMarkdownRemark___headings = "frontmatter___profile_image___childrenMarkdownRemark___headings",
  frontmatter___profile_image___childrenMarkdownRemark___timeToRead = "frontmatter___profile_image___childrenMarkdownRemark___timeToRead",
  frontmatter___profile_image___childrenMarkdownRemark___tableOfContents = "frontmatter___profile_image___childrenMarkdownRemark___tableOfContents",
  frontmatter___profile_image___childrenMarkdownRemark___children = "frontmatter___profile_image___childrenMarkdownRemark___children",
  frontmatter___profile_image___childMarkdownRemark___id = "frontmatter___profile_image___childMarkdownRemark___id",
  frontmatter___profile_image___childMarkdownRemark___excerpt = "frontmatter___profile_image___childMarkdownRemark___excerpt",
  frontmatter___profile_image___childMarkdownRemark___rawMarkdownBody = "frontmatter___profile_image___childMarkdownRemark___rawMarkdownBody",
  frontmatter___profile_image___childMarkdownRemark___fileAbsolutePath = "frontmatter___profile_image___childMarkdownRemark___fileAbsolutePath",
  frontmatter___profile_image___childMarkdownRemark___html = "frontmatter___profile_image___childMarkdownRemark___html",
  frontmatter___profile_image___childMarkdownRemark___htmlAst = "frontmatter___profile_image___childMarkdownRemark___htmlAst",
  frontmatter___profile_image___childMarkdownRemark___excerptAst = "frontmatter___profile_image___childMarkdownRemark___excerptAst",
  frontmatter___profile_image___childMarkdownRemark___headings = "frontmatter___profile_image___childMarkdownRemark___headings",
  frontmatter___profile_image___childMarkdownRemark___timeToRead = "frontmatter___profile_image___childMarkdownRemark___timeToRead",
  frontmatter___profile_image___childMarkdownRemark___tableOfContents = "frontmatter___profile_image___childMarkdownRemark___tableOfContents",
  frontmatter___profile_image___childMarkdownRemark___children = "frontmatter___profile_image___childMarkdownRemark___children",
  frontmatter___profile_image___id = "frontmatter___profile_image___id",
  frontmatter___profile_image___parent___id = "frontmatter___profile_image___parent___id",
  frontmatter___profile_image___parent___children = "frontmatter___profile_image___parent___children",
  frontmatter___profile_image___children = "frontmatter___profile_image___children",
  frontmatter___profile_image___children___id = "frontmatter___profile_image___children___id",
  frontmatter___profile_image___children___children = "frontmatter___profile_image___children___children",
  frontmatter___profile_image___internal___content = "frontmatter___profile_image___internal___content",
  frontmatter___profile_image___internal___contentDigest = "frontmatter___profile_image___internal___contentDigest",
  frontmatter___profile_image___internal___description = "frontmatter___profile_image___internal___description",
  frontmatter___profile_image___internal___fieldOwners = "frontmatter___profile_image___internal___fieldOwners",
  frontmatter___profile_image___internal___ignoreType = "frontmatter___profile_image___internal___ignoreType",
  frontmatter___profile_image___internal___mediaType = "frontmatter___profile_image___internal___mediaType",
  frontmatter___profile_image___internal___owner = "frontmatter___profile_image___internal___owner",
  frontmatter___profile_image___internal___type = "frontmatter___profile_image___internal___type",
  fields___slug = "fields___slug",
  fields___contentType = "fields___contentType",
  excerpt = "excerpt",
  rawMarkdownBody = "rawMarkdownBody",
  fileAbsolutePath = "fileAbsolutePath",
  html = "html",
  htmlAst = "htmlAst",
  excerptAst = "excerptAst",
  headings = "headings",
  headings___id = "headings___id",
  headings___value = "headings___value",
  headings___depth = "headings___depth",
  timeToRead = "timeToRead",
  tableOfContents = "tableOfContents",
  wordCount___paragraphs = "wordCount___paragraphs",
  wordCount___sentences = "wordCount___sentences",
  wordCount___words = "wordCount___words",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  frontmatter?: Maybe<FrontmatterFilterInput>
  fields?: Maybe<FieldsFilterInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>
  html?: Maybe<StringQueryOperatorInput>
  htmlAst?: Maybe<JsonQueryOperatorInput>
  excerptAst?: Maybe<JsonQueryOperatorInput>
  headings?: Maybe<MarkdownHeadingFilterListInput>
  timeToRead?: Maybe<IntQueryOperatorInput>
  tableOfContents?: Maybe<StringQueryOperatorInput>
  wordCount?: Maybe<MarkdownWordCountFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type MarkdownRemarkFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFilterInput>
}

export type MarkdownRemarkGroupConnection = {
  __typename?: "MarkdownRemarkGroupConnection"
  totalCount: Scalars["Int"]
  edges: Array<MarkdownRemarkEdge>
  nodes: Array<MarkdownRemark>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type MarkdownWordCount = {
  __typename?: "MarkdownWordCount"
  paragraphs?: Maybe<Scalars["Int"]>
  sentences?: Maybe<Scalars["Int"]>
  words?: Maybe<Scalars["Int"]>
}

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>
  sentences?: Maybe<IntQueryOperatorInput>
  words?: Maybe<IntQueryOperatorInput>
}

/** Node Interface */
export type Node = {
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>
}

export type PngOptions = {
  quality?: Maybe<Scalars["Int"]>
  compressionSpeed?: Maybe<Scalars["Int"]>
}

export type PageInfo = {
  __typename?: "PageInfo"
  currentPage: Scalars["Int"]
  hasPreviousPage: Scalars["Boolean"]
  hasNextPage: Scalars["Boolean"]
  itemCount: Scalars["Int"]
  pageCount: Scalars["Int"]
  perPage?: Maybe<Scalars["Int"]>
  totalCount: Scalars["Int"]
}

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>
  turdSize?: Maybe<Scalars["Float"]>
  alphaMax?: Maybe<Scalars["Float"]>
  optCurve?: Maybe<Scalars["Boolean"]>
  optTolerance?: Maybe<Scalars["Float"]>
  threshold?: Maybe<Scalars["Int"]>
  blackOnWhite?: Maybe<Scalars["Boolean"]>
  color?: Maybe<Scalars["String"]>
  background?: Maybe<Scalars["String"]>
}

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = "TURNPOLICY_BLACK",
  TURNPOLICY_WHITE = "TURNPOLICY_WHITE",
  TURNPOLICY_LEFT = "TURNPOLICY_LEFT",
  TURNPOLICY_RIGHT = "TURNPOLICY_RIGHT",
  TURNPOLICY_MINORITY = "TURNPOLICY_MINORITY",
  TURNPOLICY_MAJORITY = "TURNPOLICY_MAJORITY",
}

export type Query = {
  __typename?: "Query"
  file?: Maybe<File>
  allFile: FileConnection
  directory?: Maybe<Directory>
  allDirectory: DirectoryConnection
  site?: Maybe<Site>
  allSite: SiteConnection
  siteFunction?: Maybe<SiteFunction>
  allSiteFunction: SiteFunctionConnection
  sitePage?: Maybe<SitePage>
  allSitePage: SitePageConnection
  imageSharp?: Maybe<ImageSharp>
  allImageSharp: ImageSharpConnection
  markdownRemark?: Maybe<MarkdownRemark>
  allMarkdownRemark: MarkdownRemarkConnection
  sitePlugin?: Maybe<SitePlugin>
  allSitePlugin: SitePluginConnection
  siteBuildMetadata?: Maybe<SiteBuildMetadata>
  allSiteBuildMetadata: SiteBuildMetadataConnection
}

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>
  childImageSharp?: Maybe<ImageSharpFilterInput>
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>
  sort?: Maybe<FileSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>
  sort?: Maybe<DirectorySortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>
  sort?: Maybe<SiteSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QuerySiteFunctionArgs = {
  functionRoute?: Maybe<StringQueryOperatorInput>
  pluginName?: Maybe<StringQueryOperatorInput>
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>
  sort?: Maybe<SiteFunctionSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
}

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>
  sort?: Maybe<SitePageSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>
  sort?: Maybe<ImageSharpSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>
  frontmatter?: Maybe<FrontmatterFilterInput>
  fields?: Maybe<FieldsFilterInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>
  html?: Maybe<StringQueryOperatorInput>
  htmlAst?: Maybe<JsonQueryOperatorInput>
  excerptAst?: Maybe<JsonQueryOperatorInput>
  headings?: Maybe<MarkdownHeadingFilterListInput>
  timeToRead?: Maybe<IntQueryOperatorInput>
  tableOfContents?: Maybe<StringQueryOperatorInput>
  wordCount?: Maybe<MarkdownWordCountFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>
  sort?: Maybe<MarkdownRemarkSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>
  sort?: Maybe<SitePluginSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>
  sort?: Maybe<SiteBuildMetadataSortInput>
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
}

export type Site = Node & {
  __typename?: "Site"
  buildTime?: Maybe<Scalars["Date"]>
  siteMetadata?: Maybe<SiteSiteMetadata>
  port?: Maybe<Scalars["Int"]>
  host?: Maybe<Scalars["String"]>
  polyfill?: Maybe<Scalars["Boolean"]>
  pathPrefix?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type SiteBuildMetadata = Node & {
  __typename?: "SiteBuildMetadata"
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  buildTime?: Maybe<Scalars["Date"]>
}

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars["String"]>
  fromNow?: Maybe<Scalars["Boolean"]>
  difference?: Maybe<Scalars["String"]>
  locale?: Maybe<Scalars["String"]>
}

export type SiteBuildMetadataConnection = {
  __typename?: "SiteBuildMetadataConnection"
  totalCount: Scalars["Int"]
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<SiteBuildMetadataGroupConnection>
}

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
  __typename?: "SiteBuildMetadataEdge"
  next?: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous?: Maybe<SiteBuildMetadata>
}

export enum SiteBuildMetadataFieldsEnum {
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  buildTime = "buildTime",
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type SiteBuildMetadataGroupConnection = {
  __typename?: "SiteBuildMetadataGroupConnection"
  totalCount: Scalars["Int"]
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteConnection = {
  __typename?: "SiteConnection"
  totalCount: Scalars["Int"]
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: SiteFieldsEnum
}

export type SiteEdge = {
  __typename?: "SiteEdge"
  next?: Maybe<Site>
  node: Site
  previous?: Maybe<Site>
}

export enum SiteFieldsEnum {
  buildTime = "buildTime",
  siteMetadata___title = "siteMetadata___title",
  siteMetadata___description = "siteMetadata___description",
  siteMetadata___author___name = "siteMetadata___author___name",
  siteMetadata___author___summary = "siteMetadata___author___summary",
  siteMetadata___siteUrl = "siteMetadata___siteUrl",
  siteMetadata___social___twitter = "siteMetadata___social___twitter",
  siteMetadata___socialLinks = "siteMetadata___socialLinks",
  siteMetadata___socialLinks___name = "siteMetadata___socialLinks___name",
  siteMetadata___socialLinks___url = "siteMetadata___socialLinks___url",
  port = "port",
  host = "host",
  polyfill = "polyfill",
  pathPrefix = "pathPrefix",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SiteFunction = Node & {
  __typename?: "SiteFunction"
  functionRoute: Scalars["String"]
  pluginName: Scalars["String"]
  originalAbsoluteFilePath: Scalars["String"]
  originalRelativeFilePath: Scalars["String"]
  relativeCompiledFilePath: Scalars["String"]
  absoluteCompiledFilePath: Scalars["String"]
  matchPath?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteFunctionConnection = {
  __typename?: "SiteFunctionConnection"
  totalCount: Scalars["Int"]
  edges: Array<SiteFunctionEdge>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<SiteFunctionGroupConnection>
}

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionEdge = {
  __typename?: "SiteFunctionEdge"
  next?: Maybe<SiteFunction>
  node: SiteFunction
  previous?: Maybe<SiteFunction>
}

export enum SiteFunctionFieldsEnum {
  functionRoute = "functionRoute",
  pluginName = "pluginName",
  originalAbsoluteFilePath = "originalAbsoluteFilePath",
  originalRelativeFilePath = "originalRelativeFilePath",
  relativeCompiledFilePath = "relativeCompiledFilePath",
  absoluteCompiledFilePath = "absoluteCompiledFilePath",
  matchPath = "matchPath",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
}

export type SiteFunctionFilterInput = {
  functionRoute?: Maybe<StringQueryOperatorInput>
  pluginName?: Maybe<StringQueryOperatorInput>
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SiteFunctionGroupConnection = {
  __typename?: "SiteFunctionGroupConnection"
  totalCount: Scalars["Int"]
  edges: Array<SiteFunctionEdge>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteGroupConnection = {
  __typename?: "SiteGroupConnection"
  totalCount: Scalars["Int"]
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type SitePage = Node & {
  __typename?: "SitePage"
  path: Scalars["String"]
  component: Scalars["String"]
  internalComponentName: Scalars["String"]
  componentChunkName: Scalars["String"]
  matchPath?: Maybe<Scalars["String"]>
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  isCreatedByStatefulCreatePages?: Maybe<Scalars["Boolean"]>
  context?: Maybe<SitePageContext>
  pluginCreator?: Maybe<SitePlugin>
  pluginCreatorId?: Maybe<Scalars["String"]>
}

export type SitePageConnection = {
  __typename?: "SitePageConnection"
  totalCount: Scalars["Int"]
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: SitePageFieldsEnum
}

export type SitePageContext = {
  __typename?: "SitePageContext"
  slug?: Maybe<Scalars["String"]>
  prevSlug?: Maybe<Scalars["String"]>
  nextSlug?: Maybe<Scalars["String"]>
  tag?: Maybe<Scalars["String"]>
}

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>
  prevSlug?: Maybe<StringQueryOperatorInput>
  nextSlug?: Maybe<StringQueryOperatorInput>
  tag?: Maybe<StringQueryOperatorInput>
}

export type SitePageEdge = {
  __typename?: "SitePageEdge"
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export enum SitePageFieldsEnum {
  path = "path",
  component = "component",
  internalComponentName = "internalComponentName",
  componentChunkName = "componentChunkName",
  matchPath = "matchPath",
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  isCreatedByStatefulCreatePages = "isCreatedByStatefulCreatePages",
  context___slug = "context___slug",
  context___prevSlug = "context___prevSlug",
  context___nextSlug = "context___nextSlug",
  context___tag = "context___tag",
  pluginCreator___id = "pluginCreator___id",
  pluginCreator___parent___id = "pluginCreator___parent___id",
  pluginCreator___parent___parent___id = "pluginCreator___parent___parent___id",
  pluginCreator___parent___parent___children = "pluginCreator___parent___parent___children",
  pluginCreator___parent___children = "pluginCreator___parent___children",
  pluginCreator___parent___children___id = "pluginCreator___parent___children___id",
  pluginCreator___parent___children___children = "pluginCreator___parent___children___children",
  pluginCreator___parent___internal___content = "pluginCreator___parent___internal___content",
  pluginCreator___parent___internal___contentDigest = "pluginCreator___parent___internal___contentDigest",
  pluginCreator___parent___internal___description = "pluginCreator___parent___internal___description",
  pluginCreator___parent___internal___fieldOwners = "pluginCreator___parent___internal___fieldOwners",
  pluginCreator___parent___internal___ignoreType = "pluginCreator___parent___internal___ignoreType",
  pluginCreator___parent___internal___mediaType = "pluginCreator___parent___internal___mediaType",
  pluginCreator___parent___internal___owner = "pluginCreator___parent___internal___owner",
  pluginCreator___parent___internal___type = "pluginCreator___parent___internal___type",
  pluginCreator___children = "pluginCreator___children",
  pluginCreator___children___id = "pluginCreator___children___id",
  pluginCreator___children___parent___id = "pluginCreator___children___parent___id",
  pluginCreator___children___parent___children = "pluginCreator___children___parent___children",
  pluginCreator___children___children = "pluginCreator___children___children",
  pluginCreator___children___children___id = "pluginCreator___children___children___id",
  pluginCreator___children___children___children = "pluginCreator___children___children___children",
  pluginCreator___children___internal___content = "pluginCreator___children___internal___content",
  pluginCreator___children___internal___contentDigest = "pluginCreator___children___internal___contentDigest",
  pluginCreator___children___internal___description = "pluginCreator___children___internal___description",
  pluginCreator___children___internal___fieldOwners = "pluginCreator___children___internal___fieldOwners",
  pluginCreator___children___internal___ignoreType = "pluginCreator___children___internal___ignoreType",
  pluginCreator___children___internal___mediaType = "pluginCreator___children___internal___mediaType",
  pluginCreator___children___internal___owner = "pluginCreator___children___internal___owner",
  pluginCreator___children___internal___type = "pluginCreator___children___internal___type",
  pluginCreator___internal___content = "pluginCreator___internal___content",
  pluginCreator___internal___contentDigest = "pluginCreator___internal___contentDigest",
  pluginCreator___internal___description = "pluginCreator___internal___description",
  pluginCreator___internal___fieldOwners = "pluginCreator___internal___fieldOwners",
  pluginCreator___internal___ignoreType = "pluginCreator___internal___ignoreType",
  pluginCreator___internal___mediaType = "pluginCreator___internal___mediaType",
  pluginCreator___internal___owner = "pluginCreator___internal___owner",
  pluginCreator___internal___type = "pluginCreator___internal___type",
  pluginCreator___resolve = "pluginCreator___resolve",
  pluginCreator___name = "pluginCreator___name",
  pluginCreator___version = "pluginCreator___version",
  pluginCreator___pluginOptions___plugins = "pluginCreator___pluginOptions___plugins",
  pluginCreator___pluginOptions___plugins___resolve = "pluginCreator___pluginOptions___plugins___resolve",
  pluginCreator___pluginOptions___plugins___id = "pluginCreator___pluginOptions___plugins___id",
  pluginCreator___pluginOptions___plugins___name = "pluginCreator___pluginOptions___plugins___name",
  pluginCreator___pluginOptions___plugins___version = "pluginCreator___pluginOptions___plugins___version",
  pluginCreator___pluginOptions___plugins___nodeAPIs = "pluginCreator___pluginOptions___plugins___nodeAPIs",
  pluginCreator___pluginOptions___plugins___browserAPIs = "pluginCreator___pluginOptions___plugins___browserAPIs",
  pluginCreator___pluginOptions___plugins___pluginFilepath = "pluginCreator___pluginOptions___plugins___pluginFilepath",
  pluginCreator___pluginOptions___displayName = "pluginCreator___pluginOptions___displayName",
  pluginCreator___pluginOptions___fileName = "pluginCreator___pluginOptions___fileName",
  pluginCreator___pluginOptions___minify = "pluginCreator___pluginOptions___minify",
  pluginCreator___pluginOptions___namespace = "pluginCreator___pluginOptions___namespace",
  pluginCreator___pluginOptions___transpileTemplateLiterals = "pluginCreator___pluginOptions___transpileTemplateLiterals",
  pluginCreator___pluginOptions___pure = "pluginCreator___pluginOptions___pure",
  pluginCreator___pluginOptions___base64Width = "pluginCreator___pluginOptions___base64Width",
  pluginCreator___pluginOptions___stripMetadata = "pluginCreator___pluginOptions___stripMetadata",
  pluginCreator___pluginOptions___defaultQuality = "pluginCreator___pluginOptions___defaultQuality",
  pluginCreator___pluginOptions___failOnError = "pluginCreator___pluginOptions___failOnError",
  pluginCreator___pluginOptions___isTSX = "pluginCreator___pluginOptions___isTSX",
  pluginCreator___pluginOptions___jsxPragma = "pluginCreator___pluginOptions___jsxPragma",
  pluginCreator___pluginOptions___allExtensions = "pluginCreator___pluginOptions___allExtensions",
  pluginCreator___pluginOptions___name = "pluginCreator___pluginOptions___name",
  pluginCreator___pluginOptions___path = "pluginCreator___pluginOptions___path",
  pluginCreator___pluginOptions___staticFolderName = "pluginCreator___pluginOptions___staticFolderName",
  pluginCreator___pluginOptions___maxWidth = "pluginCreator___pluginOptions___maxWidth",
  pluginCreator___pluginOptions___linkImagesToOriginal = "pluginCreator___pluginOptions___linkImagesToOriginal",
  pluginCreator___pluginOptions___showCaptions = "pluginCreator___pluginOptions___showCaptions",
  pluginCreator___pluginOptions___markdownCaptions = "pluginCreator___pluginOptions___markdownCaptions",
  pluginCreator___pluginOptions___sizeByPixelDensity = "pluginCreator___pluginOptions___sizeByPixelDensity",
  pluginCreator___pluginOptions___backgroundColor = "pluginCreator___pluginOptions___backgroundColor",
  pluginCreator___pluginOptions___quality = "pluginCreator___pluginOptions___quality",
  pluginCreator___pluginOptions___withWebp = "pluginCreator___pluginOptions___withWebp",
  pluginCreator___pluginOptions___tracedSVG = "pluginCreator___pluginOptions___tracedSVG",
  pluginCreator___pluginOptions___loading = "pluginCreator___pluginOptions___loading",
  pluginCreator___pluginOptions___decoding = "pluginCreator___pluginOptions___decoding",
  pluginCreator___pluginOptions___disableBgImageOnAlpha = "pluginCreator___pluginOptions___disableBgImageOnAlpha",
  pluginCreator___pluginOptions___disableBgImage = "pluginCreator___pluginOptions___disableBgImage",
  pluginCreator___pluginOptions___wrapperStyle = "pluginCreator___pluginOptions___wrapperStyle",
  pluginCreator___pluginOptions___query = "pluginCreator___pluginOptions___query",
  pluginCreator___pluginOptions___feeds = "pluginCreator___pluginOptions___feeds",
  pluginCreator___pluginOptions___feeds___query = "pluginCreator___pluginOptions___feeds___query",
  pluginCreator___pluginOptions___feeds___output = "pluginCreator___pluginOptions___feeds___output",
  pluginCreator___pluginOptions___fonts = "pluginCreator___pluginOptions___fonts",
  pluginCreator___pluginOptions___display = "pluginCreator___pluginOptions___display",
  pluginCreator___pluginOptions___short_name = "pluginCreator___pluginOptions___short_name",
  pluginCreator___pluginOptions___start_url = "pluginCreator___pluginOptions___start_url",
  pluginCreator___pluginOptions___background_color = "pluginCreator___pluginOptions___background_color",
  pluginCreator___pluginOptions___theme_color = "pluginCreator___pluginOptions___theme_color",
  pluginCreator___pluginOptions___icon = "pluginCreator___pluginOptions___icon",
  pluginCreator___pluginOptions___legacy = "pluginCreator___pluginOptions___legacy",
  pluginCreator___pluginOptions___theme_color_in_head = "pluginCreator___pluginOptions___theme_color_in_head",
  pluginCreator___pluginOptions___cache_busting_mode = "pluginCreator___pluginOptions___cache_busting_mode",
  pluginCreator___pluginOptions___crossOrigin = "pluginCreator___pluginOptions___crossOrigin",
  pluginCreator___pluginOptions___include_favicon = "pluginCreator___pluginOptions___include_favicon",
  pluginCreator___pluginOptions___cacheDigest = "pluginCreator___pluginOptions___cacheDigest",
  pluginCreator___pluginOptions___pathCheck = "pluginCreator___pluginOptions___pathCheck",
  pluginCreator___nodeAPIs = "pluginCreator___nodeAPIs",
  pluginCreator___browserAPIs = "pluginCreator___browserAPIs",
  pluginCreator___ssrAPIs = "pluginCreator___ssrAPIs",
  pluginCreator___pluginFilepath = "pluginCreator___pluginFilepath",
  pluginCreator___packageJson___name = "pluginCreator___packageJson___name",
  pluginCreator___packageJson___description = "pluginCreator___packageJson___description",
  pluginCreator___packageJson___version = "pluginCreator___packageJson___version",
  pluginCreator___packageJson___main = "pluginCreator___packageJson___main",
  pluginCreator___packageJson___author = "pluginCreator___packageJson___author",
  pluginCreator___packageJson___license = "pluginCreator___packageJson___license",
  pluginCreator___packageJson___dependencies = "pluginCreator___packageJson___dependencies",
  pluginCreator___packageJson___dependencies___name = "pluginCreator___packageJson___dependencies___name",
  pluginCreator___packageJson___dependencies___version = "pluginCreator___packageJson___dependencies___version",
  pluginCreator___packageJson___devDependencies = "pluginCreator___packageJson___devDependencies",
  pluginCreator___packageJson___devDependencies___name = "pluginCreator___packageJson___devDependencies___name",
  pluginCreator___packageJson___devDependencies___version = "pluginCreator___packageJson___devDependencies___version",
  pluginCreator___packageJson___peerDependencies = "pluginCreator___packageJson___peerDependencies",
  pluginCreator___packageJson___peerDependencies___name = "pluginCreator___packageJson___peerDependencies___name",
  pluginCreator___packageJson___peerDependencies___version = "pluginCreator___packageJson___peerDependencies___version",
  pluginCreator___packageJson___keywords = "pluginCreator___packageJson___keywords",
  pluginCreatorId = "pluginCreatorId",
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
}

export type SitePageGroupConnection = {
  __typename?: "SitePageGroupConnection"
  totalCount: Scalars["Int"]
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePlugin = Node & {
  __typename?: "SitePlugin"
  id: Scalars["ID"]
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  resolve?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  pluginOptions?: Maybe<SitePluginPluginOptions>
  nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
  browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
  ssrAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
  pluginFilepath?: Maybe<Scalars["String"]>
  packageJson?: Maybe<SitePluginPackageJson>
}

export type SitePluginConnection = {
  __typename?: "SitePluginConnection"
  totalCount: Scalars["Int"]
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  distinct: Array<Scalars["String"]>
  max?: Maybe<Scalars["Float"]>
  min?: Maybe<Scalars["Float"]>
  sum?: Maybe<Scalars["Float"]>
  group: Array<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars["Int"]>
  limit?: Maybe<Scalars["Int"]>
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  __typename?: "SitePluginEdge"
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export enum SitePluginFieldsEnum {
  id = "id",
  parent___id = "parent___id",
  parent___parent___id = "parent___parent___id",
  parent___parent___parent___id = "parent___parent___parent___id",
  parent___parent___parent___children = "parent___parent___parent___children",
  parent___parent___children = "parent___parent___children",
  parent___parent___children___id = "parent___parent___children___id",
  parent___parent___children___children = "parent___parent___children___children",
  parent___parent___internal___content = "parent___parent___internal___content",
  parent___parent___internal___contentDigest = "parent___parent___internal___contentDigest",
  parent___parent___internal___description = "parent___parent___internal___description",
  parent___parent___internal___fieldOwners = "parent___parent___internal___fieldOwners",
  parent___parent___internal___ignoreType = "parent___parent___internal___ignoreType",
  parent___parent___internal___mediaType = "parent___parent___internal___mediaType",
  parent___parent___internal___owner = "parent___parent___internal___owner",
  parent___parent___internal___type = "parent___parent___internal___type",
  parent___children = "parent___children",
  parent___children___id = "parent___children___id",
  parent___children___parent___id = "parent___children___parent___id",
  parent___children___parent___children = "parent___children___parent___children",
  parent___children___children = "parent___children___children",
  parent___children___children___id = "parent___children___children___id",
  parent___children___children___children = "parent___children___children___children",
  parent___children___internal___content = "parent___children___internal___content",
  parent___children___internal___contentDigest = "parent___children___internal___contentDigest",
  parent___children___internal___description = "parent___children___internal___description",
  parent___children___internal___fieldOwners = "parent___children___internal___fieldOwners",
  parent___children___internal___ignoreType = "parent___children___internal___ignoreType",
  parent___children___internal___mediaType = "parent___children___internal___mediaType",
  parent___children___internal___owner = "parent___children___internal___owner",
  parent___children___internal___type = "parent___children___internal___type",
  parent___internal___content = "parent___internal___content",
  parent___internal___contentDigest = "parent___internal___contentDigest",
  parent___internal___description = "parent___internal___description",
  parent___internal___fieldOwners = "parent___internal___fieldOwners",
  parent___internal___ignoreType = "parent___internal___ignoreType",
  parent___internal___mediaType = "parent___internal___mediaType",
  parent___internal___owner = "parent___internal___owner",
  parent___internal___type = "parent___internal___type",
  children = "children",
  children___id = "children___id",
  children___parent___id = "children___parent___id",
  children___parent___parent___id = "children___parent___parent___id",
  children___parent___parent___children = "children___parent___parent___children",
  children___parent___children = "children___parent___children",
  children___parent___children___id = "children___parent___children___id",
  children___parent___children___children = "children___parent___children___children",
  children___parent___internal___content = "children___parent___internal___content",
  children___parent___internal___contentDigest = "children___parent___internal___contentDigest",
  children___parent___internal___description = "children___parent___internal___description",
  children___parent___internal___fieldOwners = "children___parent___internal___fieldOwners",
  children___parent___internal___ignoreType = "children___parent___internal___ignoreType",
  children___parent___internal___mediaType = "children___parent___internal___mediaType",
  children___parent___internal___owner = "children___parent___internal___owner",
  children___parent___internal___type = "children___parent___internal___type",
  children___children = "children___children",
  children___children___id = "children___children___id",
  children___children___parent___id = "children___children___parent___id",
  children___children___parent___children = "children___children___parent___children",
  children___children___children = "children___children___children",
  children___children___children___id = "children___children___children___id",
  children___children___children___children = "children___children___children___children",
  children___children___internal___content = "children___children___internal___content",
  children___children___internal___contentDigest = "children___children___internal___contentDigest",
  children___children___internal___description = "children___children___internal___description",
  children___children___internal___fieldOwners = "children___children___internal___fieldOwners",
  children___children___internal___ignoreType = "children___children___internal___ignoreType",
  children___children___internal___mediaType = "children___children___internal___mediaType",
  children___children___internal___owner = "children___children___internal___owner",
  children___children___internal___type = "children___children___internal___type",
  children___internal___content = "children___internal___content",
  children___internal___contentDigest = "children___internal___contentDigest",
  children___internal___description = "children___internal___description",
  children___internal___fieldOwners = "children___internal___fieldOwners",
  children___internal___ignoreType = "children___internal___ignoreType",
  children___internal___mediaType = "children___internal___mediaType",
  children___internal___owner = "children___internal___owner",
  children___internal___type = "children___internal___type",
  internal___content = "internal___content",
  internal___contentDigest = "internal___contentDigest",
  internal___description = "internal___description",
  internal___fieldOwners = "internal___fieldOwners",
  internal___ignoreType = "internal___ignoreType",
  internal___mediaType = "internal___mediaType",
  internal___owner = "internal___owner",
  internal___type = "internal___type",
  resolve = "resolve",
  name = "name",
  version = "version",
  pluginOptions___plugins = "pluginOptions___plugins",
  pluginOptions___plugins___resolve = "pluginOptions___plugins___resolve",
  pluginOptions___plugins___id = "pluginOptions___plugins___id",
  pluginOptions___plugins___name = "pluginOptions___plugins___name",
  pluginOptions___plugins___version = "pluginOptions___plugins___version",
  pluginOptions___plugins___pluginOptions___staticFolderName = "pluginOptions___plugins___pluginOptions___staticFolderName",
  pluginOptions___plugins___pluginOptions___maxWidth = "pluginOptions___plugins___pluginOptions___maxWidth",
  pluginOptions___plugins___pluginOptions___linkImagesToOriginal = "pluginOptions___plugins___pluginOptions___linkImagesToOriginal",
  pluginOptions___plugins___pluginOptions___showCaptions = "pluginOptions___plugins___pluginOptions___showCaptions",
  pluginOptions___plugins___pluginOptions___markdownCaptions = "pluginOptions___plugins___pluginOptions___markdownCaptions",
  pluginOptions___plugins___pluginOptions___sizeByPixelDensity = "pluginOptions___plugins___pluginOptions___sizeByPixelDensity",
  pluginOptions___plugins___pluginOptions___backgroundColor = "pluginOptions___plugins___pluginOptions___backgroundColor",
  pluginOptions___plugins___pluginOptions___quality = "pluginOptions___plugins___pluginOptions___quality",
  pluginOptions___plugins___pluginOptions___withWebp = "pluginOptions___plugins___pluginOptions___withWebp",
  pluginOptions___plugins___pluginOptions___tracedSVG = "pluginOptions___plugins___pluginOptions___tracedSVG",
  pluginOptions___plugins___pluginOptions___loading = "pluginOptions___plugins___pluginOptions___loading",
  pluginOptions___plugins___pluginOptions___decoding = "pluginOptions___plugins___pluginOptions___decoding",
  pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha = "pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha",
  pluginOptions___plugins___pluginOptions___disableBgImage = "pluginOptions___plugins___pluginOptions___disableBgImage",
  pluginOptions___plugins___pluginOptions___wrapperStyle = "pluginOptions___plugins___pluginOptions___wrapperStyle",
  pluginOptions___plugins___nodeAPIs = "pluginOptions___plugins___nodeAPIs",
  pluginOptions___plugins___browserAPIs = "pluginOptions___plugins___browserAPIs",
  pluginOptions___plugins___pluginFilepath = "pluginOptions___plugins___pluginFilepath",
  pluginOptions___displayName = "pluginOptions___displayName",
  pluginOptions___fileName = "pluginOptions___fileName",
  pluginOptions___minify = "pluginOptions___minify",
  pluginOptions___namespace = "pluginOptions___namespace",
  pluginOptions___transpileTemplateLiterals = "pluginOptions___transpileTemplateLiterals",
  pluginOptions___pure = "pluginOptions___pure",
  pluginOptions___base64Width = "pluginOptions___base64Width",
  pluginOptions___stripMetadata = "pluginOptions___stripMetadata",
  pluginOptions___defaultQuality = "pluginOptions___defaultQuality",
  pluginOptions___failOnError = "pluginOptions___failOnError",
  pluginOptions___isTSX = "pluginOptions___isTSX",
  pluginOptions___jsxPragma = "pluginOptions___jsxPragma",
  pluginOptions___allExtensions = "pluginOptions___allExtensions",
  pluginOptions___name = "pluginOptions___name",
  pluginOptions___path = "pluginOptions___path",
  pluginOptions___staticFolderName = "pluginOptions___staticFolderName",
  pluginOptions___maxWidth = "pluginOptions___maxWidth",
  pluginOptions___linkImagesToOriginal = "pluginOptions___linkImagesToOriginal",
  pluginOptions___showCaptions = "pluginOptions___showCaptions",
  pluginOptions___markdownCaptions = "pluginOptions___markdownCaptions",
  pluginOptions___sizeByPixelDensity = "pluginOptions___sizeByPixelDensity",
  pluginOptions___backgroundColor = "pluginOptions___backgroundColor",
  pluginOptions___quality = "pluginOptions___quality",
  pluginOptions___withWebp = "pluginOptions___withWebp",
  pluginOptions___tracedSVG = "pluginOptions___tracedSVG",
  pluginOptions___loading = "pluginOptions___loading",
  pluginOptions___decoding = "pluginOptions___decoding",
  pluginOptions___disableBgImageOnAlpha = "pluginOptions___disableBgImageOnAlpha",
  pluginOptions___disableBgImage = "pluginOptions___disableBgImage",
  pluginOptions___wrapperStyle = "pluginOptions___wrapperStyle",
  pluginOptions___query = "pluginOptions___query",
  pluginOptions___feeds = "pluginOptions___feeds",
  pluginOptions___feeds___query = "pluginOptions___feeds___query",
  pluginOptions___feeds___output = "pluginOptions___feeds___output",
  pluginOptions___fonts = "pluginOptions___fonts",
  pluginOptions___display = "pluginOptions___display",
  pluginOptions___short_name = "pluginOptions___short_name",
  pluginOptions___start_url = "pluginOptions___start_url",
  pluginOptions___background_color = "pluginOptions___background_color",
  pluginOptions___theme_color = "pluginOptions___theme_color",
  pluginOptions___icon = "pluginOptions___icon",
  pluginOptions___legacy = "pluginOptions___legacy",
  pluginOptions___theme_color_in_head = "pluginOptions___theme_color_in_head",
  pluginOptions___cache_busting_mode = "pluginOptions___cache_busting_mode",
  pluginOptions___crossOrigin = "pluginOptions___crossOrigin",
  pluginOptions___include_favicon = "pluginOptions___include_favicon",
  pluginOptions___cacheDigest = "pluginOptions___cacheDigest",
  pluginOptions___pathCheck = "pluginOptions___pathCheck",
  nodeAPIs = "nodeAPIs",
  browserAPIs = "browserAPIs",
  ssrAPIs = "ssrAPIs",
  pluginFilepath = "pluginFilepath",
  packageJson___name = "packageJson___name",
  packageJson___description = "packageJson___description",
  packageJson___version = "packageJson___version",
  packageJson___main = "packageJson___main",
  packageJson___author = "packageJson___author",
  packageJson___license = "packageJson___license",
  packageJson___dependencies = "packageJson___dependencies",
  packageJson___dependencies___name = "packageJson___dependencies___name",
  packageJson___dependencies___version = "packageJson___dependencies___version",
  packageJson___devDependencies = "packageJson___devDependencies",
  packageJson___devDependencies___name = "packageJson___devDependencies___name",
  packageJson___devDependencies___version = "packageJson___devDependencies___version",
  packageJson___peerDependencies = "packageJson___peerDependencies",
  packageJson___peerDependencies___name = "packageJson___peerDependencies___name",
  packageJson___peerDependencies___version = "packageJson___peerDependencies___version",
  packageJson___keywords = "packageJson___keywords",
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type SitePluginGroupConnection = {
  __typename?: "SitePluginGroupConnection"
  totalCount: Scalars["Int"]
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  field: Scalars["String"]
  fieldValue?: Maybe<Scalars["String"]>
}

export type SitePluginPackageJson = {
  __typename?: "SitePluginPackageJson"
  name?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  main?: Maybe<Scalars["String"]>
  author?: Maybe<Scalars["String"]>
  license?: Maybe<Scalars["String"]>
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
  keywords?: Maybe<Array<Maybe<Scalars["String"]>>>
}

export type SitePluginPackageJsonDependencies = {
  __typename?: "SitePluginPackageJsonDependencies"
  name?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependencies = {
  __typename?: "SitePluginPackageJsonDevDependencies"
  name?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  main?: Maybe<StringQueryOperatorInput>
  author?: Maybe<StringQueryOperatorInput>
  license?: Maybe<StringQueryOperatorInput>
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
  keywords?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: "SitePluginPackageJsonPeerDependencies"
  name?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPluginOptions = {
  __typename?: "SitePluginPluginOptions"
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>
  displayName?: Maybe<Scalars["Boolean"]>
  fileName?: Maybe<Scalars["Boolean"]>
  minify?: Maybe<Scalars["Boolean"]>
  namespace?: Maybe<Scalars["String"]>
  transpileTemplateLiterals?: Maybe<Scalars["Boolean"]>
  pure?: Maybe<Scalars["Boolean"]>
  base64Width?: Maybe<Scalars["Int"]>
  stripMetadata?: Maybe<Scalars["Boolean"]>
  defaultQuality?: Maybe<Scalars["Int"]>
  failOnError?: Maybe<Scalars["Boolean"]>
  isTSX?: Maybe<Scalars["Boolean"]>
  jsxPragma?: Maybe<Scalars["String"]>
  allExtensions?: Maybe<Scalars["Boolean"]>
  name?: Maybe<Scalars["String"]>
  path?: Maybe<Scalars["String"]>
  staticFolderName?: Maybe<Scalars["String"]>
  maxWidth?: Maybe<Scalars["Int"]>
  linkImagesToOriginal?: Maybe<Scalars["Boolean"]>
  showCaptions?: Maybe<Scalars["Boolean"]>
  markdownCaptions?: Maybe<Scalars["Boolean"]>
  sizeByPixelDensity?: Maybe<Scalars["Boolean"]>
  backgroundColor?: Maybe<Scalars["String"]>
  quality?: Maybe<Scalars["Int"]>
  withWebp?: Maybe<Scalars["Boolean"]>
  tracedSVG?: Maybe<Scalars["Boolean"]>
  loading?: Maybe<Scalars["String"]>
  decoding?: Maybe<Scalars["String"]>
  disableBgImageOnAlpha?: Maybe<Scalars["Boolean"]>
  disableBgImage?: Maybe<Scalars["Boolean"]>
  wrapperStyle?: Maybe<Scalars["String"]>
  query?: Maybe<Scalars["String"]>
  feeds?: Maybe<Array<Maybe<SitePluginPluginOptionsFeeds>>>
  fonts?: Maybe<Array<Maybe<Scalars["String"]>>>
  display?: Maybe<Scalars["String"]>
  short_name?: Maybe<Scalars["String"]>
  start_url?: Maybe<Scalars["String"]>
  background_color?: Maybe<Scalars["String"]>
  theme_color?: Maybe<Scalars["String"]>
  icon?: Maybe<Scalars["String"]>
  legacy?: Maybe<Scalars["Boolean"]>
  theme_color_in_head?: Maybe<Scalars["Boolean"]>
  cache_busting_mode?: Maybe<Scalars["String"]>
  crossOrigin?: Maybe<Scalars["String"]>
  include_favicon?: Maybe<Scalars["Boolean"]>
  cacheDigest?: Maybe<Scalars["String"]>
  pathCheck?: Maybe<Scalars["Boolean"]>
}

export type SitePluginPluginOptionsFeeds = {
  __typename?: "SitePluginPluginOptionsFeeds"
  query?: Maybe<Scalars["String"]>
  output?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsFeedsFilterInput = {
  query?: Maybe<StringQueryOperatorInput>
  output?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsFeedsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsFeedsFilterInput>
}

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>
  displayName?: Maybe<BooleanQueryOperatorInput>
  fileName?: Maybe<BooleanQueryOperatorInput>
  minify?: Maybe<BooleanQueryOperatorInput>
  namespace?: Maybe<StringQueryOperatorInput>
  transpileTemplateLiterals?: Maybe<BooleanQueryOperatorInput>
  pure?: Maybe<BooleanQueryOperatorInput>
  base64Width?: Maybe<IntQueryOperatorInput>
  stripMetadata?: Maybe<BooleanQueryOperatorInput>
  defaultQuality?: Maybe<IntQueryOperatorInput>
  failOnError?: Maybe<BooleanQueryOperatorInput>
  isTSX?: Maybe<BooleanQueryOperatorInput>
  jsxPragma?: Maybe<StringQueryOperatorInput>
  allExtensions?: Maybe<BooleanQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  staticFolderName?: Maybe<StringQueryOperatorInput>
  maxWidth?: Maybe<IntQueryOperatorInput>
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>
  showCaptions?: Maybe<BooleanQueryOperatorInput>
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>
  sizeByPixelDensity?: Maybe<BooleanQueryOperatorInput>
  backgroundColor?: Maybe<StringQueryOperatorInput>
  quality?: Maybe<IntQueryOperatorInput>
  withWebp?: Maybe<BooleanQueryOperatorInput>
  tracedSVG?: Maybe<BooleanQueryOperatorInput>
  loading?: Maybe<StringQueryOperatorInput>
  decoding?: Maybe<StringQueryOperatorInput>
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>
  disableBgImage?: Maybe<BooleanQueryOperatorInput>
  wrapperStyle?: Maybe<StringQueryOperatorInput>
  query?: Maybe<StringQueryOperatorInput>
  feeds?: Maybe<SitePluginPluginOptionsFeedsFilterListInput>
  fonts?: Maybe<StringQueryOperatorInput>
  display?: Maybe<StringQueryOperatorInput>
  short_name?: Maybe<StringQueryOperatorInput>
  start_url?: Maybe<StringQueryOperatorInput>
  background_color?: Maybe<StringQueryOperatorInput>
  theme_color?: Maybe<StringQueryOperatorInput>
  icon?: Maybe<StringQueryOperatorInput>
  legacy?: Maybe<BooleanQueryOperatorInput>
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>
  cache_busting_mode?: Maybe<StringQueryOperatorInput>
  crossOrigin?: Maybe<StringQueryOperatorInput>
  include_favicon?: Maybe<BooleanQueryOperatorInput>
  cacheDigest?: Maybe<StringQueryOperatorInput>
  pathCheck?: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginPluginOptionsPlugins = {
  __typename?: "SitePluginPluginOptionsPlugins"
  resolve?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["String"]>
  name?: Maybe<Scalars["String"]>
  version?: Maybe<Scalars["String"]>
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>
  nodeAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
  browserAPIs?: Maybe<Array<Maybe<Scalars["String"]>>>
  pluginFilepath?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>
}

export type SitePluginPluginOptionsPluginsPluginOptions = {
  __typename?: "SitePluginPluginOptionsPluginsPluginOptions"
  staticFolderName?: Maybe<Scalars["String"]>
  maxWidth?: Maybe<Scalars["Int"]>
  linkImagesToOriginal?: Maybe<Scalars["Boolean"]>
  showCaptions?: Maybe<Scalars["Boolean"]>
  markdownCaptions?: Maybe<Scalars["Boolean"]>
  sizeByPixelDensity?: Maybe<Scalars["Boolean"]>
  backgroundColor?: Maybe<Scalars["String"]>
  quality?: Maybe<Scalars["Int"]>
  withWebp?: Maybe<Scalars["Boolean"]>
  tracedSVG?: Maybe<Scalars["Boolean"]>
  loading?: Maybe<Scalars["String"]>
  decoding?: Maybe<Scalars["String"]>
  disableBgImageOnAlpha?: Maybe<Scalars["Boolean"]>
  disableBgImage?: Maybe<Scalars["Boolean"]>
  wrapperStyle?: Maybe<Scalars["String"]>
}

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  staticFolderName?: Maybe<StringQueryOperatorInput>
  maxWidth?: Maybe<IntQueryOperatorInput>
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>
  showCaptions?: Maybe<BooleanQueryOperatorInput>
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>
  sizeByPixelDensity?: Maybe<BooleanQueryOperatorInput>
  backgroundColor?: Maybe<StringQueryOperatorInput>
  quality?: Maybe<IntQueryOperatorInput>
  withWebp?: Maybe<BooleanQueryOperatorInput>
  tracedSVG?: Maybe<BooleanQueryOperatorInput>
  loading?: Maybe<StringQueryOperatorInput>
  decoding?: Maybe<StringQueryOperatorInput>
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>
  disableBgImage?: Maybe<BooleanQueryOperatorInput>
  wrapperStyle?: Maybe<StringQueryOperatorInput>
}

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadata = {
  __typename?: "SiteSiteMetadata"
  title?: Maybe<Scalars["String"]>
  description?: Maybe<Scalars["String"]>
  author?: Maybe<Author>
  siteUrl?: Maybe<Scalars["String"]>
  social?: Maybe<Social>
  socialLinks?: Maybe<Array<Maybe<SiteSiteMetadataSocialLinks>>>
}

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  author?: Maybe<AuthorFilterInput>
  siteUrl?: Maybe<StringQueryOperatorInput>
  social?: Maybe<SocialFilterInput>
  socialLinks?: Maybe<SiteSiteMetadataSocialLinksFilterListInput>
}

export type SiteSiteMetadataSocialLinks = {
  __typename?: "SiteSiteMetadataSocialLinks"
  name?: Maybe<Scalars["String"]>
  url?: Maybe<Scalars["String"]>
}

export type SiteSiteMetadataSocialLinksFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  url?: Maybe<StringQueryOperatorInput>
}

export type SiteSiteMetadataSocialLinksFilterListInput = {
  elemMatch?: Maybe<SiteSiteMetadataSocialLinksFilterInput>
}

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type Social = {
  __typename?: "Social"
  twitter?: Maybe<Scalars["String"]>
}

export type SocialFilterInput = {
  twitter?: Maybe<StringQueryOperatorInput>
}

export enum SortOrderEnum {
  ASC = "ASC",
  DESC = "DESC",
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars["String"]>
  ne?: Maybe<Scalars["String"]>
  in?: Maybe<Array<Maybe<Scalars["String"]>>>
  nin?: Maybe<Array<Maybe<Scalars["String"]>>>
  regex?: Maybe<Scalars["String"]>
  glob?: Maybe<Scalars["String"]>
}

export type TransformOptions = {
  grayscale?: Maybe<Scalars["Boolean"]>
  duotone?: Maybe<DuotoneGradient>
  rotate?: Maybe<Scalars["Int"]>
  trim?: Maybe<Scalars["Float"]>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
}

export type WebPOptions = {
  quality?: Maybe<Scalars["Int"]>
}

export type GatsbyImageSharpFixedFragment = {
  __typename?: "ImageSharpFixed"
  base64?: Maybe<string>
  width: number
  height: number
  src: string
  srcSet: string
}

export type GatsbyImageSharpFixed_TracedSvgFragment = {
  __typename?: "ImageSharpFixed"
  tracedSVG?: Maybe<string>
  width: number
  height: number
  src: string
  srcSet: string
}

export type GatsbyImageSharpFixed_WithWebpFragment = {
  __typename?: "ImageSharpFixed"
  base64?: Maybe<string>
  width: number
  height: number
  src: string
  srcSet: string
  srcWebp?: Maybe<string>
  srcSetWebp?: Maybe<string>
}

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  __typename?: "ImageSharpFixed"
  tracedSVG?: Maybe<string>
  width: number
  height: number
  src: string
  srcSet: string
  srcWebp?: Maybe<string>
  srcSetWebp?: Maybe<string>
}

export type GatsbyImageSharpFixed_NoBase64Fragment = {
  __typename?: "ImageSharpFixed"
  width: number
  height: number
  src: string
  srcSet: string
}

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  __typename?: "ImageSharpFixed"
  width: number
  height: number
  src: string
  srcSet: string
  srcWebp?: Maybe<string>
  srcSetWebp?: Maybe<string>
}

export type GatsbyImageSharpFluidFragment = {
  __typename?: "ImageSharpFluid"
  base64?: Maybe<string>
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
  __typename?: "ImageSharpFluid"
  maxHeight: number
  maxWidth: number
}

export type GatsbyImageSharpFluid_TracedSvgFragment = {
  __typename?: "ImageSharpFluid"
  tracedSVG?: Maybe<string>
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export type GatsbyImageSharpFluid_WithWebpFragment = {
  __typename?: "ImageSharpFluid"
  base64?: Maybe<string>
  aspectRatio: number
  src: string
  srcSet: string
  srcWebp?: Maybe<string>
  srcSetWebp?: Maybe<string>
  sizes: string
}

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  __typename?: "ImageSharpFluid"
  tracedSVG?: Maybe<string>
  aspectRatio: number
  src: string
  srcSet: string
  srcWebp?: Maybe<string>
  srcSetWebp?: Maybe<string>
  sizes: string
}

export type GatsbyImageSharpFluid_NoBase64Fragment = {
  __typename?: "ImageSharpFluid"
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  __typename?: "ImageSharpFluid"
  aspectRatio: number
  src: string
  srcSet: string
  srcWebp?: Maybe<string>
  srcSetWebp?: Maybe<string>
  sizes: string
}

export type HeaderQueryQueryVariables = Exact<{ [key: string]: never }>

export type HeaderQueryQuery = {
  __typename?: "Query"
  site?: Maybe<{
    __typename?: "Site"
    siteMetadata?: Maybe<{
      __typename?: "SiteSiteMetadata"
      title?: Maybe<string>
    }>
  }>
}

export type SeoQueryQueryVariables = Exact<{ [key: string]: never }>

export type SeoQueryQuery = {
  __typename?: "Query"
  site?: Maybe<{
    __typename?: "Site"
    siteMetadata?: Maybe<{
      __typename?: "SiteSiteMetadata"
      title?: Maybe<string>
      description?: Maybe<string>
      social?: Maybe<{ __typename?: "Social"; twitter?: Maybe<string> }>
    }>
  }>
}

export type SocialLinksQueryQueryVariables = Exact<{ [key: string]: never }>

export type SocialLinksQueryQuery = {
  __typename?: "Query"
  site?: Maybe<{
    __typename?: "Site"
    siteMetadata?: Maybe<{
      __typename?: "SiteSiteMetadata"
      socialLinks?: Maybe<
        Array<
          Maybe<{
            __typename?: "SiteSiteMetadataSocialLinks"
            name?: Maybe<string>
            url?: Maybe<string>
          }>
        >
      >
    }>
  }>
}

export type BlogQueryVariables = Exact<{ [key: string]: never }>

export type BlogQuery = {
  __typename?: "Query"
  site?: Maybe<{
    __typename?: "Site"
    siteMetadata?: Maybe<{
      __typename?: "SiteSiteMetadata"
      title?: Maybe<string>
    }>
  }>
  allMarkdownRemark: {
    __typename?: "MarkdownRemarkConnection"
    nodes: Array<{
      __typename?: "MarkdownRemark"
      excerpt?: Maybe<string>
      timeToRead?: Maybe<number>
      fields?: Maybe<{ __typename?: "Fields"; slug?: Maybe<string> }>
      frontmatter?: Maybe<{
        __typename?: "Frontmatter"
        date?: Maybe<any>
        description?: Maybe<string>
        title?: Maybe<string>
        tags?: Maybe<Array<string>>
      }>
    }>
  }
}

export type TagsQueryVariables = Exact<{ [key: string]: never }>

export type TagsQuery = {
  __typename?: "Query"
  allMarkdownRemark: {
    __typename?: "MarkdownRemarkConnection"
    group: Array<{
      __typename?: "MarkdownRemarkGroupConnection"
      fieldValue?: Maybe<string>
      totalCount: number
    }>
  }
}

export type AboutTemplateQueryVariables = Exact<{
  slug: Scalars["String"]
}>

export type AboutTemplateQuery = {
  __typename?: "Query"
  markdownRemark?: Maybe<{
    __typename?: "MarkdownRemark"
    html?: Maybe<string>
    frontmatter?: Maybe<{
      __typename?: "Frontmatter"
      title?: Maybe<string>
      profile_image?: Maybe<{
        __typename?: "File"
        childImageSharp?: Maybe<{
          __typename?: "ImageSharp"
          gatsbyImageData: any
        }>
      }>
    }>
  }>
}

export type ContactTemplateQueryVariables = Exact<{
  slug: Scalars["String"]
}>

export type ContactTemplateQuery = {
  __typename?: "Query"
  markdownRemark?: Maybe<{
    __typename?: "MarkdownRemark"
    html?: Maybe<string>
    frontmatter?: Maybe<{ __typename?: "Frontmatter"; title?: Maybe<string> }>
  }>
}

export type PostBySlugQueryVariables = Exact<{
  slug: Scalars["String"]
  prevSlug?: Maybe<Scalars["String"]>
  nextSlug?: Maybe<Scalars["String"]>
}>

export type PostBySlugQuery = {
  __typename?: "Query"
  markdownRemark?: Maybe<{
    __typename?: "MarkdownRemark"
    excerpt?: Maybe<string>
    html?: Maybe<string>
    frontmatter?: Maybe<{
      __typename?: "Frontmatter"
      title?: Maybe<string>
      tags?: Maybe<Array<string>>
      date?: Maybe<any>
      description?: Maybe<string>
      profile_image?: Maybe<{ __typename?: "File"; absolutePath: string }>
    }>
  }>
  prev?: Maybe<{
    __typename?: "MarkdownRemark"
    frontmatter?: Maybe<{ __typename?: "Frontmatter"; title?: Maybe<string> }>
    fields?: Maybe<{ __typename?: "Fields"; slug?: Maybe<string> }>
  }>
  next?: Maybe<{
    __typename?: "MarkdownRemark"
    frontmatter?: Maybe<{ __typename?: "Frontmatter"; title?: Maybe<string> }>
    fields?: Maybe<{ __typename?: "Fields"; slug?: Maybe<string> }>
  }>
}

export type TagsTemplateQueryVariables = Exact<{
  tag?: Maybe<Scalars["String"]>
}>

export type TagsTemplateQuery = {
  __typename?: "Query"
  allMarkdownRemark: {
    __typename?: "MarkdownRemarkConnection"
    totalCount: number
    nodes: Array<{
      __typename?: "MarkdownRemark"
      timeToRead?: Maybe<number>
      excerpt?: Maybe<string>
      fields?: Maybe<{ __typename?: "Fields"; slug?: Maybe<string> }>
      frontmatter?: Maybe<{
        __typename?: "Frontmatter"
        date?: Maybe<any>
        description?: Maybe<string>
        tags?: Maybe<Array<string>>
        title?: Maybe<string>
      }>
    }>
  }
}

export type MainTemplateQueryVariables = Exact<{
  slug: Scalars["String"]
}>

export type MainTemplateQuery = {
  __typename?: "Query"
  site?: Maybe<{
    __typename?: "Site"
    siteMetadata?: Maybe<{
      __typename?: "SiteSiteMetadata"
      title?: Maybe<string>
    }>
  }>
  allMarkdownRemark: {
    __typename?: "MarkdownRemarkConnection"
    nodes: Array<{
      __typename?: "MarkdownRemark"
      excerpt?: Maybe<string>
      timeToRead?: Maybe<number>
      fields?: Maybe<{ __typename?: "Fields"; slug?: Maybe<string> }>
      frontmatter?: Maybe<{
        __typename?: "Frontmatter"
        date?: Maybe<any>
        description?: Maybe<string>
        title?: Maybe<string>
        tags?: Maybe<Array<string>>
      }>
    }>
  }
  markdownRemark?: Maybe<{
    __typename?: "MarkdownRemark"
    html?: Maybe<string>
    frontmatter?: Maybe<{ __typename?: "Frontmatter"; title?: Maybe<string> }>
  }>
}

export const GatsbyImageSharpFixedFragmentDoc = gql`
  fragment GatsbyImageSharpFixed on ImageSharpFixed {
    base64
    width
    height
    src
    srcSet
  }
`
export const GatsbyImageSharpFixed_TracedSvgFragmentDoc = gql`
  fragment GatsbyImageSharpFixed_tracedSVG on ImageSharpFixed {
    tracedSVG
    width
    height
    src
    srcSet
  }
`
export const GatsbyImageSharpFixed_WithWebpFragmentDoc = gql`
  fragment GatsbyImageSharpFixed_withWebp on ImageSharpFixed {
    base64
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`
export const GatsbyImageSharpFixed_WithWebp_TracedSvgFragmentDoc = gql`
  fragment GatsbyImageSharpFixed_withWebp_tracedSVG on ImageSharpFixed {
    tracedSVG
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`
export const GatsbyImageSharpFixed_NoBase64FragmentDoc = gql`
  fragment GatsbyImageSharpFixed_noBase64 on ImageSharpFixed {
    width
    height
    src
    srcSet
  }
`
export const GatsbyImageSharpFixed_WithWebp_NoBase64FragmentDoc = gql`
  fragment GatsbyImageSharpFixed_withWebp_noBase64 on ImageSharpFixed {
    width
    height
    src
    srcSet
    srcWebp
    srcSetWebp
  }
`
export const GatsbyImageSharpFluidFragmentDoc = gql`
  fragment GatsbyImageSharpFluid on ImageSharpFluid {
    base64
    aspectRatio
    src
    srcSet
    sizes
  }
`
export const GatsbyImageSharpFluidLimitPresentationSizeFragmentDoc = gql`
  fragment GatsbyImageSharpFluidLimitPresentationSize on ImageSharpFluid {
    maxHeight: presentationHeight
    maxWidth: presentationWidth
  }
`
export const GatsbyImageSharpFluid_TracedSvgFragmentDoc = gql`
  fragment GatsbyImageSharpFluid_tracedSVG on ImageSharpFluid {
    tracedSVG
    aspectRatio
    src
    srcSet
    sizes
  }
`
export const GatsbyImageSharpFluid_WithWebpFragmentDoc = gql`
  fragment GatsbyImageSharpFluid_withWebp on ImageSharpFluid {
    base64
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`
export const GatsbyImageSharpFluid_WithWebp_TracedSvgFragmentDoc = gql`
  fragment GatsbyImageSharpFluid_withWebp_tracedSVG on ImageSharpFluid {
    tracedSVG
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`
export const GatsbyImageSharpFluid_NoBase64FragmentDoc = gql`
  fragment GatsbyImageSharpFluid_noBase64 on ImageSharpFluid {
    aspectRatio
    src
    srcSet
    sizes
  }
`
export const GatsbyImageSharpFluid_WithWebp_NoBase64FragmentDoc = gql`
  fragment GatsbyImageSharpFluid_withWebp_noBase64 on ImageSharpFluid {
    aspectRatio
    src
    srcSet
    srcWebp
    srcSetWebp
    sizes
  }
`
export const HeaderQueryDocument = gql`
  query HeaderQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

/**
 * __useHeaderQueryQuery__
 *
 * To run a query within a React component, call `useHeaderQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useHeaderQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHeaderQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useHeaderQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    HeaderQueryQuery,
    HeaderQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<HeaderQueryQuery, HeaderQueryQueryVariables>(
    HeaderQueryDocument,
    options
  )
}
export function useHeaderQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    HeaderQueryQuery,
    HeaderQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<HeaderQueryQuery, HeaderQueryQueryVariables>(
    HeaderQueryDocument,
    options
  )
}
export type HeaderQueryQueryHookResult = ReturnType<typeof useHeaderQueryQuery>
export type HeaderQueryLazyQueryHookResult = ReturnType<
  typeof useHeaderQueryLazyQuery
>
export type HeaderQueryQueryResult = Apollo.QueryResult<
  HeaderQueryQuery,
  HeaderQueryQueryVariables
>
export const SeoQueryDocument = gql`
  query SeoQuery {
    site {
      siteMetadata {
        title
        description
        social {
          twitter
        }
      }
    }
  }
`

/**
 * __useSeoQueryQuery__
 *
 * To run a query within a React component, call `useSeoQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSeoQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSeoQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useSeoQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<SeoQueryQuery, SeoQueryQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SeoQueryQuery, SeoQueryQueryVariables>(
    SeoQueryDocument,
    options
  )
}
export function useSeoQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SeoQueryQuery,
    SeoQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<SeoQueryQuery, SeoQueryQueryVariables>(
    SeoQueryDocument,
    options
  )
}
export type SeoQueryQueryHookResult = ReturnType<typeof useSeoQueryQuery>
export type SeoQueryLazyQueryHookResult = ReturnType<
  typeof useSeoQueryLazyQuery
>
export type SeoQueryQueryResult = Apollo.QueryResult<
  SeoQueryQuery,
  SeoQueryQueryVariables
>
export const SocialLinksQueryDocument = gql`
  query SocialLinksQuery {
    site {
      siteMetadata {
        socialLinks {
          name
          url
        }
      }
    }
  }
`

/**
 * __useSocialLinksQueryQuery__
 *
 * To run a query within a React component, call `useSocialLinksQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useSocialLinksQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSocialLinksQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useSocialLinksQueryQuery(
  baseOptions?: Apollo.QueryHookOptions<
    SocialLinksQueryQuery,
    SocialLinksQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<SocialLinksQueryQuery, SocialLinksQueryQueryVariables>(
    SocialLinksQueryDocument,
    options
  )
}
export function useSocialLinksQueryLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    SocialLinksQueryQuery,
    SocialLinksQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    SocialLinksQueryQuery,
    SocialLinksQueryQueryVariables
  >(SocialLinksQueryDocument, options)
}
export type SocialLinksQueryQueryHookResult = ReturnType<
  typeof useSocialLinksQueryQuery
>
export type SocialLinksQueryLazyQueryHookResult = ReturnType<
  typeof useSocialLinksQueryLazyQuery
>
export type SocialLinksQueryQueryResult = Apollo.QueryResult<
  SocialLinksQueryQuery,
  SocialLinksQueryQueryVariables
>
export const BlogDocument = gql`
  query Blog {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      nodes {
        fields {
          slug
        }
        excerpt
        timeToRead
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          description
          title
          tags
        }
      }
    }
  }
`

/**
 * __useBlogQuery__
 *
 * To run a query within a React component, call `useBlogQuery` and pass it any options that fit your needs.
 * When your component renders, `useBlogQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBlogQuery({
 *   variables: {
 *   },
 * });
 */
export function useBlogQuery(
  baseOptions?: Apollo.QueryHookOptions<BlogQuery, BlogQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<BlogQuery, BlogQueryVariables>(BlogDocument, options)
}
export function useBlogLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<BlogQuery, BlogQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<BlogQuery, BlogQueryVariables>(
    BlogDocument,
    options
  )
}
export type BlogQueryHookResult = ReturnType<typeof useBlogQuery>
export type BlogLazyQueryHookResult = ReturnType<typeof useBlogLazyQuery>
export type BlogQueryResult = Apollo.QueryResult<BlogQuery, BlogQueryVariables>
export const TagsDocument = gql`
  query Tags {
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

/**
 * __useTagsQuery__
 *
 * To run a query within a React component, call `useTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTagsQuery(
  baseOptions?: Apollo.QueryHookOptions<TagsQuery, TagsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TagsQuery, TagsQueryVariables>(TagsDocument, options)
}
export function useTagsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TagsQuery, TagsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TagsQuery, TagsQueryVariables>(
    TagsDocument,
    options
  )
}
export type TagsQueryHookResult = ReturnType<typeof useTagsQuery>
export type TagsLazyQueryHookResult = ReturnType<typeof useTagsLazyQuery>
export type TagsQueryResult = Apollo.QueryResult<TagsQuery, TagsQueryVariables>
export const AboutTemplateDocument = gql`
  query AboutTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        profile_image {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: PNG, height: 400)
          }
        }
      }
    }
  }
`

/**
 * __useAboutTemplateQuery__
 *
 * To run a query within a React component, call `useAboutTemplateQuery` and pass it any options that fit your needs.
 * When your component renders, `useAboutTemplateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAboutTemplateQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useAboutTemplateQuery(
  baseOptions: Apollo.QueryHookOptions<
    AboutTemplateQuery,
    AboutTemplateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<AboutTemplateQuery, AboutTemplateQueryVariables>(
    AboutTemplateDocument,
    options
  )
}
export function useAboutTemplateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    AboutTemplateQuery,
    AboutTemplateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<AboutTemplateQuery, AboutTemplateQueryVariables>(
    AboutTemplateDocument,
    options
  )
}
export type AboutTemplateQueryHookResult = ReturnType<
  typeof useAboutTemplateQuery
>
export type AboutTemplateLazyQueryHookResult = ReturnType<
  typeof useAboutTemplateLazyQuery
>
export type AboutTemplateQueryResult = Apollo.QueryResult<
  AboutTemplateQuery,
  AboutTemplateQueryVariables
>
export const ContactTemplateDocument = gql`
  query ContactTemplate($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

/**
 * __useContactTemplateQuery__
 *
 * To run a query within a React component, call `useContactTemplateQuery` and pass it any options that fit your needs.
 * When your component renders, `useContactTemplateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useContactTemplateQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useContactTemplateQuery(
  baseOptions: Apollo.QueryHookOptions<
    ContactTemplateQuery,
    ContactTemplateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<ContactTemplateQuery, ContactTemplateQueryVariables>(
    ContactTemplateDocument,
    options
  )
}
export function useContactTemplateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    ContactTemplateQuery,
    ContactTemplateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<
    ContactTemplateQuery,
    ContactTemplateQueryVariables
  >(ContactTemplateDocument, options)
}
export type ContactTemplateQueryHookResult = ReturnType<
  typeof useContactTemplateQuery
>
export type ContactTemplateLazyQueryHookResult = ReturnType<
  typeof useContactTemplateLazyQuery
>
export type ContactTemplateQueryResult = Apollo.QueryResult<
  ContactTemplateQuery,
  ContactTemplateQueryVariables
>
export const PostBySlugDocument = gql`
  query PostBySlug($slug: String!, $prevSlug: String, $nextSlug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        description
        profile_image {
          absolutePath
        }
      }
    }
    prev: markdownRemark(fields: { slug: { eq: $prevSlug } }) {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
    next: markdownRemark(fields: { slug: { eq: $nextSlug } }) {
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`

/**
 * __usePostBySlugQuery__
 *
 * To run a query within a React component, call `usePostBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *      prevSlug: // value for 'prevSlug'
 *      nextSlug: // value for 'nextSlug'
 *   },
 * });
 */
export function usePostBySlugQuery(
  baseOptions: Apollo.QueryHookOptions<
    PostBySlugQuery,
    PostBySlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<PostBySlugQuery, PostBySlugQueryVariables>(
    PostBySlugDocument,
    options
  )
}
export function usePostBySlugLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    PostBySlugQuery,
    PostBySlugQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<PostBySlugQuery, PostBySlugQueryVariables>(
    PostBySlugDocument,
    options
  )
}
export type PostBySlugQueryHookResult = ReturnType<typeof usePostBySlugQuery>
export type PostBySlugLazyQueryHookResult = ReturnType<
  typeof usePostBySlugLazyQuery
>
export type PostBySlugQueryResult = Apollo.QueryResult<
  PostBySlugQuery,
  PostBySlugQueryVariables
>
export const TagsTemplateDocument = gql`
  query TagsTemplate($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        frontmatter: { tags: { in: [$tag] } }
        fields: { contentType: { eq: "posts" } }
      }
    ) {
      totalCount
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          description
          tags
          title
        }
        timeToRead
        excerpt
      }
    }
  }
`

/**
 * __useTagsTemplateQuery__
 *
 * To run a query within a React component, call `useTagsTemplateQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsTemplateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsTemplateQuery({
 *   variables: {
 *      tag: // value for 'tag'
 *   },
 * });
 */
export function useTagsTemplateQuery(
  baseOptions?: Apollo.QueryHookOptions<
    TagsTemplateQuery,
    TagsTemplateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<TagsTemplateQuery, TagsTemplateQueryVariables>(
    TagsTemplateDocument,
    options
  )
}
export function useTagsTemplateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    TagsTemplateQuery,
    TagsTemplateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<TagsTemplateQuery, TagsTemplateQueryVariables>(
    TagsTemplateDocument,
    options
  )
}
export type TagsTemplateQueryHookResult = ReturnType<
  typeof useTagsTemplateQuery
>
export type TagsTemplateLazyQueryHookResult = ReturnType<
  typeof useTagsTemplateLazyQuery
>
export type TagsTemplateQueryResult = Apollo.QueryResult<
  TagsTemplateQuery,
  TagsTemplateQueryVariables
>
export const MainTemplateDocument = gql`
  query MainTemplate($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fields: { contentType: { eq: "posts" } } }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 9
    ) {
      nodes {
        fields {
          slug
        }
        excerpt
        timeToRead
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          description
          title
          tags
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`

/**
 * __useMainTemplateQuery__
 *
 * To run a query within a React component, call `useMainTemplateQuery` and pass it any options that fit your needs.
 * When your component renders, `useMainTemplateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMainTemplateQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useMainTemplateQuery(
  baseOptions: Apollo.QueryHookOptions<
    MainTemplateQuery,
    MainTemplateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MainTemplateQuery, MainTemplateQueryVariables>(
    MainTemplateDocument,
    options
  )
}
export function useMainTemplateLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    MainTemplateQuery,
    MainTemplateQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MainTemplateQuery, MainTemplateQueryVariables>(
    MainTemplateDocument,
    options
  )
}
export type MainTemplateQueryHookResult = ReturnType<
  typeof useMainTemplateQuery
>
export type MainTemplateLazyQueryHookResult = ReturnType<
  typeof useMainTemplateLazyQuery
>
export type MainTemplateQueryResult = Apollo.QueryResult<
  MainTemplateQuery,
  MainTemplateQueryVariables
>
