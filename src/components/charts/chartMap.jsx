"use client"

import {
  Map,
  MapMarker,
  MapMarkerClusterGroup,
  MapTileLayer,
} from "@/components/ui/map"

export function UsersMap({ points }) {
  if (!points.length) return null

  return (
    <div className="h-[500px] w-full rounded-lg overflow-hidden">
      <Map center={points[0].position} zoom={2}>
        <MapTileLayer />

        <MapMarkerClusterGroup>
          {points.map((point, i) => (
            <MapMarker key={i} position={point.position} />
          ))}
        </MapMarkerClusterGroup>
        
        
      </Map>
    </div>
  )
}
