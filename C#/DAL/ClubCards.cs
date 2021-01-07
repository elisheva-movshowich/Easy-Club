//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace DAL
{
    using System;
    using System.Collections.Generic;
    
    public partial class ClubCards
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public ClubCards()
        {
            this.Buyings = new HashSet<Buyings>();
        }
    
        public int C_id { get; set; }
        public Nullable<int> UserId { get; set; }
        public Nullable<int> EnterpCardId { get; set; }
        public Nullable<bool> StatusPriseForNew { get; set; }
        public Nullable<bool> StatusPriseForBirthDay { get; set; }
        public Nullable<int> Points { get; set; }
        public System.DateTime BuyDate { get; set; }
        public System.DateTime ExpireDate { get; set; }
        public Nullable<int> AppLoteryId { get; set; }
        public int Level { get; set; }
        public Nullable<bool> Payment { get; set; }
        public Nullable<bool> Issue { get; set; }
        public string PostalCode { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Buyings> Buyings { get; set; }
        public virtual Users Users { get; set; }
        public virtual Lotery Lotery { get; set; }
        public virtual EnterpCards EnterpCards { get; set; }
    }
}
