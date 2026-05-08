{
  description = "Fuwari blog development environment";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, utils }:
    utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShells.default = pkgs.mkShell {
          buildInputs = with pkgs; [
            nodejs_20
            pnpm
          ];

          shellHook = ''
            echo "Fuwari development environment loaded!"
            echo "Node version: $(node --version)"
            echo "pnpm version: $(pnpm --version)"
          '';
        };
      });
}
