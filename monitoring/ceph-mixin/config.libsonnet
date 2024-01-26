{
  _config+:: {
    dashboardTags: ['ceph-mixin'],

    clusterLabel: 'cluster',
    showMultiCluster: true,

    CephNodeNetworkPacketDropsThreshold: 0.005,
    CephNodeNetworkPacketDropsPerSec: 10,
    CephRBDMirrorImageTransferBandwidthThreshold: 0.8,
    CephRBDMirrorImagesPerDaemonThreshold: 100,
  },
}
