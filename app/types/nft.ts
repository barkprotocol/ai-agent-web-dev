/**
 * Represents the response structure from an API call that returns non-fungible tokens.
 */
export interface NonFungibleApiResponse {
  items: NonFungibleToken[];
}

/**
 * Represents a non-fungible token with its associated metadata and properties.
 */
export interface NonFungibleToken {
  interface: string;
  id: string;
  content: NonFungibleContent;
  authorities: Authority[];
  compression: Compression;
  grouping: Grouping[];
  royalty: Royalty;
  creators: Creator[];
  ownership: Ownership;
  supply: Supply | null;
  mutable: boolean;
  burnt: boolean;
  inscription: Inscription;
  spl20: Spl20;
}

/**
 * Represents the content associated with a non-fungible token.
 */
export interface NonFungibleContent {
  $schema: string;
  json_uri: string;
  files: File[];
  metadata: Metadata;
  links: Record<string, string>;
}

/**
 * Represents a file associated with a non-fungible token.
 */
export interface File {
  uri: string;
  cdn_uri: string;
  mime: string;
}

/**
 * Represents the metadata of a non-fungible token.
 */
export interface Metadata {
  attributes: Attribute[];
  description: string;
  name: string;
  symbol: string;
}

/**
 * Represents an attribute of a non-fungible token.
 */
export interface Attribute {
  value: string;
  trait_type: string;
}

/**
 * Represents an authority associated with a non-fungible token.
 */
export interface Authority {
  address: string;
  scopes: string[];
}

/**
 * Represents the metadata of a collection.
 */
export interface CollectionMetadata {
  name: string;
  symbol: string;
  image: string;
  description: string;
  external_url: string;
}

/**
 * Represents a grouping of non-fungible tokens.
 */
export interface Grouping {
  group_key: string;
  group_value: string;
  collection_metadata: CollectionMetadata;
}

/**
 * Represents a creator of a non-fungible token.
 */
export interface Creator {
  address: string;
  share: number;
  verified: boolean;
}

/**
 * Represents the supply information of a non-fungible token.
 */
export interface Supply {
  print_max_supply: number;
  print_current_supply: number;
  edition_nonce: number;
}

/**
 * Represents inscription information for a non-fungible token.
 */
export interface Inscription {
  order: number;
  size: number;
  contentType: string;
  encoding: string;
  validationHash: string;
  inscriptionDataAccount: string;
}

/**
 * Represents SPL-20 token information.
 */
export interface Spl20 {
  p: string;
  op: string;
  tick: string;
  amt: string;
}

/**
 * Represents compression-related information for a token.
 */
export interface Compression {
  eligible: boolean;
  compressed: boolean;
  data_hash: string;
  creator_hash: string;
  asset_hash: string;
  tree: string;
  seq: number;
  leaf_id: number;
}

/**
 * Represents royalty information for a token.
 */
export interface Royalty {
  royalty_model: string;
  target: string | null;
  percent: number;
  basis_points: number;
  primary_sale_happened: boolean;
  locked: boolean;
}

/**
 * Represents ownership information for a token.
 */
export interface Ownership {
  frozen: boolean;
  delegated: boolean;
  delegate: null | string;
  ownership_model: string;
  owner: string;
}

